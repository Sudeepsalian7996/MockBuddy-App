import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

const PricingFeatureCard = ({ feature, index }) => {
  return (
    <Box
      sx={{
        padding: "1.25rem",
        backgroundColor: "#f5f5f5",
        borderRadius: 2,
        boxShadow:
          "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
      }}
    >
      <Typography
        component="div"
        gutterBottom
        sx={{ fontSize: "13px", color: "#0176d3" }}
      >
        {feature.badge}
      </Typography>
      <Accordion
        key={index}
        disableGutters
        elevation={0}
        square
        sx={{
          mb: 3,
          "&:before": {
            display: "none",
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                borderRadius: "50%",
                background: "#e0e0e0",
                padding: "0.25rem",
                fontSize: "2rem",
              }}
            />
          }
          aria-controls={`panel${index}-content`}
          id={`panel${index}-header`}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{ width: "94%", fontWeight: 500 }}
          >
            {feature.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "1rem" }}
          >
            {feature.description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default PricingFeatureCard;
