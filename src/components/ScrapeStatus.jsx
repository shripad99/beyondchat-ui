import React, { useState } from "react";
import { Card, Typography, Stack, Chip, Box } from "@mui/material";

export default function ScrapeStatus() {
  const [scrapedPages] = useState([
    { url: "https://example.com", status: "completed", chunks: ["Header", "Main Content"] },
    { url: "https://example.com/about", status: "pending", chunks: [] }
  ]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 3 }}>
      {scrapedPages.map((page) => (
        <Card key={page.url} sx={{ p: 2, boxShadow: 2 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="body1" fontWeight="bold">
              {page.url}
            </Typography>
            <Chip
              label={page.status === "completed" ? "✓ Completed" : "⏳ Pending"}
              color={page.status === "completed" ? "success" : "warning"}
            />
          </Stack>

          {page.status === "completed" && page.chunks.length > 0 && (
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              {page.chunks.map((chunk, i) => (
                <Chip key={i} label={chunk} variant="outlined" color="primary" />
              ))}
            </Stack>
          )}
        </Card>
      ))}
    </Box>
  );
}
