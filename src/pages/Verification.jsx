import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";

export default function Verification() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleVerify = () => {
    navigate("/setup");
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, p: 3, boxShadow: 3, borderRadius: 2, bgcolor: "white", textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Verify Your Email
        </Typography>
        <Typography variant="body1" color="textSecondary">
          We've sent a 6-digit code to your email.
        </Typography>

        <form onSubmit={(e) => { e.preventDefault(); handleVerify(); }}>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Enter Verification Code"
                variant="outlined"
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth type="submit" variant="contained" color="primary">
                Verify Email
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}
