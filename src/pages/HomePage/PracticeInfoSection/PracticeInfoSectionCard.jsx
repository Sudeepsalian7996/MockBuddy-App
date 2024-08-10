import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const PracticeInfoSectionCard = ({ title, icon, description }) => {
  return (
    <Box sx={{ padding: "0.8rem" }}>
      <Box>
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            fontSize: "1.1rem",
          }}
        >
          {icon}
          <Typography variant="h6">{title}</Typography>
        </CardContent>
      </Box>

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

export default PracticeInfoSectionCard;
