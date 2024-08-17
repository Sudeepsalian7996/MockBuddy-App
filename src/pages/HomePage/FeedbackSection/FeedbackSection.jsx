import React, { useState } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Header } from "./FeedbackSectionStyles";
import FeedbackCard from "pages/HomePage/FeedbackSection/FeedbackCard";
const feedbacks = [
  {
    name: "Vinod Bhoomin",
    rating: 5,
    image: "path/to/image1.jpg",
    date: "01-05-2024",
    description:
      "MockBuddy peer-to-peer mock interviews sessions were everything I needed in one place to get my dream PM job.",
  },
  {
    name: "Jane Smith",
    rating: 4,
    image: "path/to/image2.jpg",
    date: "21-03-2024",
    description:
      "Nothing beats mock coding interviews. I wasn't nervous on the day of my interviews and got offers from Google and Microsoft.",
  },
  {
    name: "Emily Davis",
    rating: 4,
    image: "path/to/image4.jpg",
    date: "17-07-2024",
    description:
      "I truly benefited from the mock interview practice sessions. MockBuddy gave me everything I needed to succeed.",
  },
  // Add more feedback objects as needed
];

const FeedbackSection = () => {
  const [visibleFeedbacks, setVisibleFeedbacks] = useState(4);

  const showMoreFeedback = () => {
    setVisibleFeedbacks((prevCount) => prevCount + 4);
  };

  return (
    <Container>
      <Header
        variant="h5"
        sx={{
          width: "70%",
          margin: "0rem auto",
          marginTop: "7rem",
          fontSize: "2rem",
        }}
      >
        Join thousands of candidates using MockBuddy to practice and land their
        dream jobs.
      </Header>
      <Grid container spacing={2}>
        {feedbacks.slice(0, visibleFeedbacks).map((feedback, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FeedbackCard
              name={feedback.name}
              rating={feedback.rating}
              image={feedback.image}
              date={feedback.date}
              description={feedback.description}
            />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" marginTop={4}>
        <Button
          variant="contained"
          onClick={showMoreFeedback}
          sx={{
            textTransform: "none",
            fontSize: "1rem",
            padding: "1rem 2rem",
            boxShadow: "none",
            border: "1px solid #0176d3",
            backgroundColor: "white",
            color: "#0176d3 ",
            "&:hover": {
              border: "1px solid #003366",
              color: "#003366",
              backgroundColor: "white",
              boxShadow: "none",
            },
          }}
        >
          Show More Feedbacks
        </Button>
      </Box>
    </Container>
  );
};

export default FeedbackSection;
