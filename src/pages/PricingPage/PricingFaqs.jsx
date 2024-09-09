import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const pricingFaq = [
  {
    question: "How do I access the exclusive content?",
    answer:
      "As a MockBuddy member, you will automatically have access to the exclusive content, including advanced learning resources, guides, and frameworks, which can be accessed through your dashboard.",
  },
  {
    question: "How can I request a job referral?",
    answer:
      "You can request a job referral through our job referral platform. As a MockBuddy member, you get priority placement for referrals, meaning your request will be seen first by our network of over 400 referrers.",
  },
  {
    question: "Are there any additional fees for job referrals?",
    answer:
      "No, job referral requests are included as part of your MockBuddy membership, and you can make unlimited referral requests.",
  },
  {
    question: "Can I cancel my membership anytime?",
    answer:
      "Yes, you can cancel your membership anytime through your account page. Be sure to cancel before your renewal date to avoid charges for the next billing cycle.",
  },
  {
    question: "How can I receive expert guidance?",
    answer:
      "As a member, you have direct access to industry professionals and mentors who can guide you in your career, provide feedback on your progress, and help you prepare for interviews.",
  },
  {
    question: "What networking opportunities are available?",
    answer:
      "MockBuddy offers exclusive access to networking events, webinars, and meetups where you can connect with professionals in your field and expand your career opportunities.",
  },
];

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
