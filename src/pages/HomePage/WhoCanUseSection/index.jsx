import { Box, CardContent, Typography, Container, Button } from "@mui/material";
import React from "react";
import ChatIcon from "assets/Icons/ChatIcon";
import PeopleIcon from "assets/Icons/PeopleIcon";
import QuestionaireIcon from "assets/Icons/QuestionaireIcon";
import whoCanUseImg from "assets/images/whoCanUseImg.webp";
const WhoCanUseSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        gap: "2rem",
        marginTop: { xs: "4rem", md: "7rem" },
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        component="img"
        src={whoCanUseImg}
        alt="Who can use Section"
        sx={{ width: { xs: "100%", md: "50%" } }}
      ></Box>
      <Box>
        <Typography
          sx={{
            fontWeight: "500",
            color: "#0176d3",
            fontSize: "1.1rem",
            marginBottom: "1rem",
          }}
        >
          Who's using it
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "2rem",
            width: "80%",
            marginBottom: "1rem",
          }}
        >
          How everyone in tech prepares
        </Typography>
        <Typography
          sx={{ fontSize: "1.1rem", color: "#4B5563", lineHeight: "1.8rem" }}
        >
          Exponent Practice supports interview prep for everyone in tech. From
          product management to software engineering and data roles, there are
          thousands of practice questions to choose from.
        </Typography>
      </Box>
    </Container>
  );
};

export default WhoCanUseSection;
