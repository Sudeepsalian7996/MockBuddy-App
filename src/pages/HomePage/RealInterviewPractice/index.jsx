import { Box, Typography, Container } from "@mui/material";
import React from "react";
import realInterviewPractice from "assets/images/realInterviewPractice.png";

const RealInterviewPractice = () => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "2rem",
        marginTop: { xs: "4rem", md: "7rem" },
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box>
        <Typography
          sx={{
            fontWeight: "500",
            color: "#0176d3",
            fontSize: "1.1rem",
            marginBottom: "1rem",
          }}
        >
          Need real time practice?
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "2rem",
            width: "80%",
            marginBottom: "1rem",
          }}
        >
          Get real interview practice
        </Typography>
        <Typography
          sx={{ fontSize: "1.1rem", color: "#4B5563", lineHeight: "1.8rem" }}
        >
          MockBuddy aims to provide the complete tech interview practice you
          need, for free. Hone your interviewing skills, learn from your peers,
          and become comfortable performing under pressure within an interview
          setting.
        </Typography>
      </Box>
      <Box
        component="img"
        src={realInterviewPractice}
        alt="Who can use Section"
        sx={{ width: { xs: "100%", md: "50%" } }}
      ></Box>
    </Container>
  );
};

export default RealInterviewPractice;
