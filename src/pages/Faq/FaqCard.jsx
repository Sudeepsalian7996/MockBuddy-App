import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faqcard = ({ item, index }) => {
  return (
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
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${index}-content`}
        id={`panel${index}-header`}
      >
        <Typography variant="h6">{item.question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ width: "90%", color: "#4B5563" }}>
          {item.answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Faqcard;
