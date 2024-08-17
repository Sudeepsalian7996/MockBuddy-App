import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import {
  Instagram,
  Twitter,
  LinkedIn,
  YouTube,
  Facebook,
} from "@mui/icons-material";
import MockLogo from "assets/Icons/MockLogo";

const socialMediaLinks = [
  { icon: Instagram, url: "https://www.instagram.com", label: "Instagram" },
  { icon: Twitter, url: "https://www.twitter.com", label: "Twitter" },
  { icon: Facebook, url: "https://www.facebook.com", label: "Facebook" },
  { icon: LinkedIn, url: "https://www.linkedin.com", label: "LinkedIn" },
  { icon: YouTube, url: "https://www.youtube.com", label: "YouTube" },
];

const SocialMediaIcon = ({ icon: Icon, url, label }) => (
  <IconButton
    component="a"
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    sx={{ color: "white" }}
  >
    <Icon />
  </IconButton>
);

const Footer = () => {
  return (
    <Grid
      container
      spacing={2}
      direction={{ xs: "column", lg: "row" }}
      sx={{
        color: "white",
        backgroundColor: "#032e61",
        marginTop: "5rem",
        padding: { xs: "1rem", sm: "2rem", md: "2rem 3rem" },
        justifyContent: "space-between",
      }}
    >
      {/* Logo Section */}
      <Grid
        item
        xs={12}
        sm={4}
        md={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Box sx={{ display: "flex", gap: "0.6rem" }}>
          <MockLogo />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: "flex",
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
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            justifyContent: {
              xs: "space-between",
              md: "space-evenly",
              lg: "space-between",
            },
            textDecoration: "underline",
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          <Typography>Privacy and policy</Typography>
          <Typography>Terms of Use</Typography>
          <Typography>Cookie Policy</Typography>
          <Typography>FAQs</Typography>
          <Typography>Contact Us</Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{ marginTop: "1rem", textAlign: "center" }}
        >
          ©2024 Slack Technologies, LLC, a Salesforce company. All rights
          reserved. Various trademarks held by their respective owners.
        </Typography>
      </Grid>

      {/* Social Media Icons Section */}
      <Grid item xs={12} sm={4} md={3}>
        <Box display="flex" justifyContent="center" gap="1rem" flexWrap="wrap">
          {socialMediaLinks.map((social, index) => (
            <SocialMediaIcon
              key={index}
              icon={social.icon}
              url={social.url}
              label={social.label}
            />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
