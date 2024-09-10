import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { pricingFaq } from "./PricingFaqData";

const PricingFaqs = () => {
  return (
    <Container sx={{ marginTop: "4rem" }}>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: "1.75rem", md: "2rem" },
          fontWeight: 600,
          marginBottom: "2rem",
        }}
      >
        Frequently Asked Questions
      </Typography>
      {pricingFaq.map((item, index) => (
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
      ))}
    </Container>
  );
};

export default PricingFaqs;
