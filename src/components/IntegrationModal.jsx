import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, TextField, Button, Box, Snackbar } from "@mui/material";

export default function IntegrationModal({ type, onClose }) {
  const [email, setEmail] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const integrationCode = `<script src="https://cdn.beyondchats.com/widget.js"></script>`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(integrationCode);
    setSnackbarOpen(true); 
  };

  return (
    <>
      <Dialog open={true} onClose={onClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          {type === "integrate" ? "Integration Instructions" : "Email Instructions"}
        </DialogTitle>

        <DialogContent>
          {type === "integrate" ? (
            <>
              <Box
                component="pre"
                sx={{
                  bgcolor: "#f5f5f5",
                  p: 2,
                  borderRadius: 1,
                  overflowX: "auto",
                  fontFamily: "monospace",
                }}
              >
                {integrationCode}
              </Box>
              <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleCopyCode}>
                Copy Code
              </Button>
            </>
          ) : (
            <Box component="form">
              <TextField
                fullWidth
                variant="outlined"
                label="Developer's Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mt: 2 }}
              />
              <Button variant="contained" color="primary" sx={{ mt: 2 }} type="submit">
                Send Instructions
              </Button>
            </Box>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        message="Code copied to clipboard!"
      />
    </>
  );
}
