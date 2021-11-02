import React from "react";
import { Card, Grid, Typography } from "@mui/material";

export default function SummeryCard({ text, number }) {
  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card
        elevation={3}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          p: 3,
        }}
      >
        <Typography component="h4">{text}</Typography>
        <Typography>{number}</Typography>
      </Card>
    </Grid>
  );
}
