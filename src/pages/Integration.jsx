import React, { useState } from "react";
import { Button, Stack, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import IntegrationModal from "../components/IntegrationModal";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Integration() {
  const [showModal, setShowModal] = useState(null);
  const [integrationSuccess, setIntegrationSuccess] = useState(false);
  const navigate = useNavigate();
  const { width, height } = useWindowSize();

  const handleTestChatbot = () => {
    window.open("https://example.com", "_blank");
  };

  const handleTestIntegration = () => {
    setIntegrationSuccess(Math.random() > 0.5); 
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Box sx={{ maxWidth: "lg", margin: "auto", padding: 4 }}>
        <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleTestChatbot}
            sx={{ flexGrow: 1 }}
          >
            Test Chatbot
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setShowModal("integrate")}
            sx={{ flexGrow: 1 }}
          >
            Integrate on Your Website
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={handleTestIntegration}
            sx={{ flexGrow: 1 }}
          >
            Test Integration
          </Button>
        </Stack>
        {showModal && (
          <IntegrationModal
            type={showModal}
            onClose={() => setShowModal(null)}
          />
        )}

        {integrationSuccess ? (
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Confetti width={width} height={height} recycle={false} />
            <Typography variant="h4" color="success.main" sx={{ mb: 2 }}>
              🎉 Integration Successful!
            </Typography>
            <Stack spacing={2} sx={{ alignItems: "center" }}>
              <Button variant="contained" color="primary">
                Explore Admin Panel
              </Button>
              <Button variant="contained" color="primary">
                Start Talking to Your Chatbot
              </Button>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ justifyContent: "center", mt: 4 }}>
              <Button variant="outlined" color="primary">
                Twitter
              </Button>
              <Button variant="outlined" color="primary">
                Facebook
              </Button>
              <Button variant="outlined" color="primary">
                LinkedIn
              </Button>
            </Stack>
          </Box>
        ) : (
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Typography variant="h4" color="error.main" sx={{ mb: 2 }}>
              ⚠️ Integration Pending
            </Typography>
            <Typography variant="body1" color="text.secondary">
              We're still verifying your integration...
            </Typography>
            <Button
              variant="contained"
              color="error"
              sx={{ mt: 4 }}
              onClick={handleTestIntegration}
            >
              Retry Check
            </Button>
          </Box>
        )}
      </Box>
    </motion.div>
  );
}
