import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScrapeStatus from "../components/ScrapeStatus";
import {
  Box,
  Button,
  Container,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";

export default function OrganizationSetup() {
  const [formData, setFormData] = useState({
    companyName: "",
    websiteUrl: "",
    description: "",
  });
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => Math.min(prev + 10, 100));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, p: 3, boxShadow: 3, borderRadius: 2, bgcolor: "white" }}>
        <Typography variant="h5" gutterBottom>
          Organization Setup
        </Typography>

        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Company Name"
                variant="outlined"
                required
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Website URL"
                variant="outlined"
                type="url"
                required
                value={formData.websiteUrl}
                onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Company Description"
                variant="outlined"
                multiline
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </Grid>
          </Grid>
        </form>

        <Box sx={{ mt: 3 }}>
          <ScrapeStatus />
        </Box>

        <Box sx={{ mt: 3 }}>
          <LinearProgress variant="determinate" value={progress} />
          <Typography variant="body2" sx={{ mt: 1 }}>
            {progress}% Completed
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => navigate("/integration")}
              disabled={progress < 100}
            >
              {progress === 100 ? "Continue" : "Training..."}
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button fullWidth variant="outlined" onClick={() => navigate("/integration")}>
              Skip and Continue
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
