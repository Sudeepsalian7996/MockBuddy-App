import { Box, CardContent, Typography, Container, Button } from "@mui/material";
import React from "react";
import ChatIcon from "assets/Icons/ChatIcon";
import PeopleIcon from "assets/Icons/PeopleIcon";
import QuestionaireIcon from "assets/Icons/QuestionaireIcon";
import whySectionImg from "assets/images/whyPracticeSection.webp";
import { PracticeButton } from "pages/HomePage/HeroSection/HeroSectionStyles";
const WhyPracticeSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        gap: "2rem",
        marginTop: "4rem",
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
          Why practice?
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "2rem",
            width: "80%",
            marginBottom: "1rem",
          }}
        >
          Gain confidence and get real results
        </Typography>
        <CardContent sx={{ display: "flex", gap: "1rem" }}>
          <ChatIcon />
          <Typography
            sx={{ fontSize: "1.1rem", color: "#4B5563", lineHeight: "1.8rem" }}
          >
            Practice and receive feedback on both your technical and behavioral
            interviewing skills.
          </Typography>
        </CardContent>
        <CardContent sx={{ display: "flex", gap: "1rem" }}>
          <PeopleIcon />
          <Typography
            sx={{ fontSize: "1.1rem", color: "#4B5563", lineHeight: "1.8rem" }}
          >
            Match with serious, like-minded candidates who are actively
            improving their interview skills.
          </Typography>
        </CardContent>
        <CardContent sx={{ display: "flex", gap: "1rem" }}>
          <QuestionaireIcon />
          <Typography
            sx={{ fontSize: "1.1rem", color: "#4B5563", lineHeight: "1.8rem" }}
          >
            Deep dive into the most commonly asked interview questions in tech.
          </Typography>
        </CardContent>
        <PracticeButton section="whyPractice">
          Start Free Practice
        </PracticeButton>
      </Box>
      <Box
        component="img"
        src={whySectionImg}
        alt="Why Practice Section"
        sx={{ width: { xs: "100%", md: "50%" } }}
      ></Box>
    </Container>
  );
};

export default WhyPracticeSection;
