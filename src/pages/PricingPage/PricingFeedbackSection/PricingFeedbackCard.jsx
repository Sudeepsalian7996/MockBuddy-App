import React from "react";
import {
  StyledCard,
  UserAvatar,
  InfoWrapper,
} from "pages/HomePage/FeedbackSection/FeedbackCardStyles";
import { Box, Typography, CardContent, Container } from "@mui/material";

const PricingFeedbackCard = ({ feedback }) => {
  return (
    <Container>
      <InfoWrapper>
        <UserAvatar src={feedback.image} alt={feedback.name} />
        <CardContent>
          <Typography variant="h6" sx={{ marginTop: "1rem" }}>
            {feedback.name}
          </Typography>
          <Box display="flex" alignItems="center" mb={1}>
            <Typography>{feedback.designation}</Typography>
          </Box>
        </CardContent>
      </InfoWrapper>

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
        {feedback.description}
      </Typography>
    </Container>
  );
};

export default PricingFeedbackCard;
