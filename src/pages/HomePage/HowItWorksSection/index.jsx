import React from "react";
import { Typography, Container, Grid } from "@mui/material";
import peerImg from "assets/images/peerImg.png";
import practiceImg from "assets/images/practiceImg.png";
import interviewQueImg from "assets/images/interviewQueImg.png";
import HowItWorksCard from "./HowItWorksCard";

const data = [
  {
    title: "Personal Peer Matching",
    image: peerImg,
    description:
      "Each practice peer is picked especially for you, based on availability, experience, education, practice topics, and target companies.",
  },
  {
    title: "Full Interview Questions",
    image: interviewQueImg,
    description:
      "Full questions, answers and specific interviewing tips enable both you and your peer to interview each other like pros.",
  },
  {
    title: "Interactive 1-on-1 Practice",
    image: practiceImg,
    description:
      "Practice job interviews anytime right from your browser with a real-time collaborative environment and HD video chat.",
  },
];

const HowItWorksSection = () => {
  return (
    <Container>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginTop: { xs: "4rem", md: "7rem" },
          marginBottom: "4rem",
          fontSize: "2rem",
        }}
      >
        How Personal Peer Matching Works
      </Typography>
      <Grid container spacing={2}>
        {data.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <HowItWorksCard
              title={card.title}
              image={card.image}
              description={card.description}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HowItWorksSection;
