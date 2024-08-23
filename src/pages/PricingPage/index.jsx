import React from "react";
import { Box, Container, Typography } from "@mui/material";
import PricingTabs from "./PricingTabs";

const PricingPage = () => {
  return (
    <Container sx={{ marginTop: "5rem" }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h5" sx={{ fontSize: "3rem", fontWeight: 600 }}>
          Unlock the full member experience
        </Typography>
        <Typography sx={{ fontSize: "1.2rem" }}>
          Get access to all courses, video answers, peer mock interviews, and
          more.
        </Typography>
      </Box>
      <PricingTabs />
    </Container>
  );
};

export default PricingPage;
