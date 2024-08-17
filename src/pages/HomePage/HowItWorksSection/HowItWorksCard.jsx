import React from "react";
import Typography from "@mui/material/Typography";
import {
  StyledCard,
  UserAvatar,
  InfoWrapper,
} from "pages/HomePage/FeedbackSection/FeedbackCardStyles";
import { Avatar, Box } from "@mui/material";

const HowItWorksCard = ({ title, image, description }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "1rem",
      }}
    >
      <Avatar
        src={image}
        sx={{
          width: 100,
          height: 100,
          padding: "1rem",
          backgroundColor: "#d9d9d9",
        }}
        alt={title}
      />
      <Typography variant="h6">{title}</Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{
          fontSize: "1.1rem",
          color: "#4B5563",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 6,
          WebkitBoxOrient: "vertical",
          lineHeight: "1.8rem",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default HowItWorksCard;
