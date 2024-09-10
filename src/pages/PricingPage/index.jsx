import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import PricingTabs from "pages/PricingPage/PremiumPricingSection/PricingTabs";
import PricingFeatureCard from "pages/PricingPage/PricingFeatures/PricingFeatureCard";
import { premiumFeatures } from "pages/PricingPage/PricingData";
import PricingFaqs from "pages/PricingPage/PricingFaqs/PricingFaqs";
import PricingFeedbackSection from "pages/PricingPage/PricingFeedbackSection";

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
      <Box
        sx={{
          textAlign: "center",
          marginTop: "4rem",
          padding: { xs: "0.5rem", sm: 0 },
        }}
      >
        <Typography component="h3" sx={{ fontSize: "2rem", fontWeight: 700 }}>
          Top Benefits of Premium Membership
        </Typography>
        <Typography
          component="p"
          sx={{
            width: { sm: "50%" },
            margin: "auto",
            marginTop: "0.75rem",
            color: "grey",
          }}
        >
          Unlock exclusive resources, priority support, and expert guidance with
          our premium membership to elevate your professional growth.
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, padding: 2, marginTop: "2rem" }}>
        <Grid container spacing={3}>
          {premiumFeatures.map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <PricingFeatureCard feature={feature} index={index} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <PricingFaqs />
      <PricingFeedbackSection />
    </Container>
  );
};

export default PricingPage;
