import { useState, useEffect } from "react";
import { Box, Button, Typography, Card, Stack } from "@mui/material";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Success() {
  const { width, height } = useWindowSize();
  const [integrationSuccess, setIntegrationSuccess] = useState(false);

  useEffect(() => {
    setIntegrationSuccess(Math.random() > 0.5);
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Card sx={{ p: 4, width: "100%", maxWidth: 500, textAlign: "center", boxShadow: 3 }}>
        {integrationSuccess ? (
          <>
            <Confetti width={width} height={height} recycle={false} />
            <Typography variant="h4" fontWeight="bold" color="success.main">
              🎉 Integration Successful!
            </Typography>
            <Stack spacing={2} sx={{ mt: 3 }}>
              <Button variant="contained" color="primary">
                Explore Admin Panel
              </Button>
              <Button variant="contained" color="secondary">
                Start Chatting
              </Button>
            </Stack>
            <Typography variant="subtitle1" sx={{ mt: 3, fontWeight: "bold" }}>
              Share on:
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 2, justifyContent: "center" }}>
              <Button variant="outlined" color="info">
                Twitter
              </Button>
              <Button variant="outlined" color="primary">
                Facebook
              </Button>
              <Button variant="outlined" color="secondary">
                LinkedIn
              </Button>
            </Stack>
          </>
        ) : (
          <Box>
            <Typography variant="h4" color="warning.main">
              ⚠️ Integration Pending
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              We're still verifying your integration...
            </Typography>
            <Button variant="contained" color="warning" sx={{ mt: 3 }}>
              Retry Check
            </Button>
          </Box>
        )}
      </Card>
    </Box>
  );
}
