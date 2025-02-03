import React, { useState } from "react";
import { Card, CardContent, Typography, Box, Chip, CircularProgress } from "@mui/material";

export default function ScrapeStatus() {
  const [scrapedPages] = useState([
    { url: "https://example.com", status: "completed", chunks: ["Header", "Main Content"] },
    { url: "https://example.com/about", status: "pending", chunks: [] },
  ]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
      {scrapedPages.map((page) => (
        <Card key={page.url} sx={{ minWidth: 275, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="body1" fontWeight="bold">
              {page.url}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
              {page.status === "completed" ? (
                <Chip label="Completed" color="success" />
              ) : (
                <Chip
                  label={
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CircularProgress size={14} color="warning" />
                      Pending
                    </Box>
                  }
                  color="warning"
                  variant="outlined"
                />
              )}
            </Box>

            {page.status === "completed" && (
              <Box sx={{ mt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
                {page.chunks.map((chunk, i) => (
                  <Chip key={i} label={chunk} color="primary" />
                ))}
              </Box>
            )}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
