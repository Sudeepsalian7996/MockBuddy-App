import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import FaqCard from "pages/Faq/FaqCard";
import {
  mostCommonFaq,
  peerMatching,
  interviewFaq,
  techSupportFaq,
} from "pages/Faq/FaqData";

const Faqs = () => {
  //Opens gmail as popup along with to address and subject
  const getInTouchButton = () => {
    const email = "practice@trymockbuddy.com";
    const subject = encodeURIComponent(
      "Additional Questions - Request for Information"
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`;

    window.open(
      gmailUrl,
      "composeGmailWindow",
      "width=800,height=600,top=100,left=100"
    );
  };
  return (
    <Container sx={{ marginTop: { xs: "2rem", md: "4rem" } }}>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: "1.75rem", md: "2rem" },
          fontWeight: 600,
          marginBottom: "1rem",
        }}
      >
        We're here to answer all your questions
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          margin: { md: "auto" },
          width: { md: "50%" },
          color: "grey",
        }}
      >
        If you're new to MockBuddy, this section will help you learn more about
        the platform and its features.
      </Typography>
      <Box sx={{ margin: { md: "1.5rem 6rem" } }}>
        <Box sx={{ margin: "1rem 0 2rem 0" }}>
          <Typography
            sx={{
              fontWeight: "bolder",
              fontSize: "1.4rem",
              marginBottom: "1rem",
            }}
          >
            Popular questions
          </Typography>
          {mostCommonFaq.map((item, index) => (
            <FaqCard item={item} index={index} />
          ))}
        </Box>
        <Box sx={{ margin: "1rem 0 2rem 0" }}>
          <Typography
            sx={{
              fontWeight: "bolder",
              fontSize: "1.4rem",
              marginBottom: "1rem",
            }}
          >
            Peer matching and partner selection
          </Typography>
          {peerMatching.map((item, index) => (
            <FaqCard item={item} index={index} />
          ))}
        </Box>{" "}
        <Box sx={{ margin: "1rem 0 2rem 0" }}>
          <Typography
            sx={{
              fontWeight: "bolder",
              fontSize: "1.4rem",
              marginBottom: "1rem",
            }}
          >
            All about your mock interviews
          </Typography>
          {interviewFaq.map((item, index) => (
            <FaqCard item={item} index={index} />
          ))}
        </Box>{" "}
        <Box sx={{ margin: "1rem 0 2rem 0" }}>
          <Typography
            sx={{
              fontWeight: "bolder",
              fontSize: "1.4rem",
              marginBottom: "1rem",
            }}
          >
            Technical support and troubleshooting
          </Typography>
          {techSupportFaq.map((item, index) => (
            <FaqCard item={item} index={index} />
          ))}
        </Box>
      </Box>

      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ color: "grey", marginBottom: "1rem" }}>
          Got any more questions?
        </Typography>
        <Button
          sx={{
            textTransform: "none",
            padding: "0.65rem 2rem",
            border: "1px solid #dbd4d4",
            fontSize: "1rem",
          }}
          onClick={getInTouchButton}
        >
          Get in touch
        </Button>
      </Box>
    </Container>
  );
};

export default Faqs;
