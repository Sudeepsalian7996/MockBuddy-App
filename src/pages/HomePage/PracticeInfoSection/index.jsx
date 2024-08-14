import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import PracticeInfoSectionCard from "pages/HomePage/PracticeInfoSection/PracticeInfoSectionCard";
import ExchangeIcon from "assets/Icons/ExchangeIcon";
import MatchedIcon from "assets/Icons/MatchedIcon";
import ScheduleIcon from "assets/Icons/ScheduleIcon";

const practiceInfo = [
  {
    title: "Schedule a time",
    icon: <ScheduleIcon />,
    description:
      "Join later today or pre-schedule an hour-long mock interview session that suits your availability, experience, and skills. Practice anytime that fits.",
  },
  {
    title: "Get matched",
    icon: <MatchedIcon />,
    description:
      "Automatically match with peers preparing for the same interviews. Each match is picked just for you. Take turns role-playing as interviewer and interviewee.",
  },
  {
    title: "Exchange feedback",
    icon: <ExchangeIcon />,
    description:
      "Trade detailed and actionable notes with your parter after the session ends to improve for next time. Get honest feedback that only a peer could give.",
  },
  // Add more feedback objects as needed
];

const PracticeInfoSection = () => {
  return (
    <Container>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginTop: { xs: "4rem", md: "7rem" },
          marginBottom: "2rem",
          fontSize: "2rem",
        }}
      >
        How to schedule a practice session
      </Typography>
      <Grid container spacing={2}>
        {practiceInfo.map((info, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PracticeInfoSectionCard
              title={info.title}
              icon={info.icon}
              description={info.description}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PracticeInfoSection;
