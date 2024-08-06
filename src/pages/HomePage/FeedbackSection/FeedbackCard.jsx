import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { StyledCard, UserAvatar, InfoWrapper } from "./FeedbackCardStyles";

const FeedbackCard = ({ name, rating, image, description }) => (
  <StyledCard
    sx={{
      boxShadow:
        "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
    }}
  >
    <InfoWrapper>
      <UserAvatar src={image} alt={name} />
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Box display="flex" alignItems="center" mb={1}>
          <Rating value={rating} readOnly />
        </Box>
      </CardContent>
    </InfoWrapper>

    <Typography
      variant="body2"
      color="textSecondary"
      sx={{
        fontSize: "1.1rem",
        color: "inherit",
        overflow: "hidden",
        display: "-webkit-box",
        WebkitLineClamp: 3 /* Number of lines to show */,
        WebkitBoxOrient: "vertical",
      }}
    >
      {description}
      {/* <Box
        component="a"
        sx={{
          color: "blue",
          cursor: "pointer",
          textDecoration: "underline",
        }}
        href="/your-read-more-page" // Update with your target URL
      >
        Read more...
      </Box> */}
      <p>date:</p>
      <p>time:</p>
    </Typography>
  </StyledCard>
);

export default FeedbackCard;
