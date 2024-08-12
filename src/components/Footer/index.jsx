import { Box, colors, Grid, Typography } from "@mui/material";
import React from "react";
import MockBuddyLogo from "assets/images/mocklogo.svg";
import MockLogo from "assets/Icons/MockLogo";

const Footer = () => {
  return (
    <Grid
      container
      spacing={2}
      direction={{ xs: "column", sm: "row" }}
      sx={{
        color: "white",
        backgroundColor: "#032e61",
        marginTop: "5rem",
        padding: "2rem 3rem",
      }}
    >
      {/* Logo Section */}
      <Grid item xs={12} sm={4} md={2}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <MockLogo />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "1.75rem",
            }}
          >
            MOCKBUDDY
          </Typography>
        </Box>
      </Grid>

      {/* Privacy Section */}
      <Grid item xs={12} sm={4} md={6}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Privacy</Typography>
          <Typography>Terms of Use</Typography>
          <Typography>Cookie Policy</Typography>
          <Typography>Contact Us</Typography>
        </Box>
        <Typography variant="body2" sx={{ marginTop: "1rem" }}>
          © Copyright 2024 Salesforce, Inc. All rights reserved. Various
          trademarks held by their respective owners.
        </Typography>
      </Grid>

      {/* Social Media Icons Section */}
      <Grid item xs={12} sm={4} md={3}>
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          <Box component="img" src={MockBuddyLogo} height="50px" width="50px" />
          <Box component="img" src={MockBuddyLogo} height="50px" width="50px" />
          <Box component="img" src={MockBuddyLogo} height="50px" width="50px" />
          <Box component="img" src={MockBuddyLogo} height="50px" width="50px" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
