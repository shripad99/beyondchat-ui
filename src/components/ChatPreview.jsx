import { Box, Paper, TextField, Typography } from "@mui/material";

export default function ChatPreview() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Paper elevation={3} sx={{ width: "100%", height: "300px", overflow: "hidden", borderRadius: 2 }}>
        <iframe
          src="https://example.com"
          title="preview"
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      </Paper>

      <Paper elevation={3} sx={{ width: "100%", p: 2, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ bgcolor: "#1976d2", color: "white", p: 1, borderRadius: 1, textAlign: "center" }}>
          BeyondChats
        </Typography>

        <Box sx={{ minHeight: "150px", p: 1, overflowY: "auto", bgcolor: "#f5f5f5", borderRadius: 1 }}>
        </Box>

       
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type your message..."
          sx={{ mt: 1 }}
        />
      </Paper>
    </Box>
  );
}
