import React from "react";
import { useNavigate } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { StyledCard, UserAvatar, InfoWrapper } from "./FeedbackCardStyles";

const FeedbackCard = ({ name, rating, image, description }) => {
  const navigate = useNavigate();
  return (
    <StyledCard
      sx={{
        cursor: "pointer",
      }}
      onClick={() => {
        navigate("/feedback");
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
      <Typography
        component="div"
        sx={{ color: "grey", fontWeight: 500, marginTop: "1.25rem" }}
      >
        02 Monday 2023
      </Typography>
    </StyledCard>
  );
};

export default FeedbackCard;
