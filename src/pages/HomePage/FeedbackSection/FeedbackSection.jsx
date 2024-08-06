import React, { useState } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Header } from "./FeedbackSectionStyles";
import FeedbackCard from "pages/HomePage/FeedbackSection/FeedbackCard";
const feedbacks = [
  {
    name: "John Doe",
    rating: 5,
    image: "path/to/image1.jpg",
    description:
      "customer relationship management (CRM) platform. We help your marketing, sales, commerce, service and IT teams work as one from anywhere — so you can keep your customers happy everywhere.",
  },
  {
    name: "Jane Smith",
    rating: 4,
    image: "path/to/image2.jpg",
    description: "Helped me ace my interview.",
  },
  {
    name: "Emily Davis",
    rating: 4,
    image: "path/to/image4.jpg",
    description:
      "customer relationship so you can keep your customers happy everywhere..",
  },
  // Add more feedback objects as needed
];

const FeedbackSection = () => {
  const [visibleFeedbacks, setVisibleFeedbacks] = useState(4);

  const showMoreFeedback = () => {
    setVisibleFeedbacks((prevCount) => prevCount + 4);
  };

  return (
    <Container sx={{ margin: "3rem auto" }}>
      <Header variant="h5" sx={{ width: "70%", margin: "2rem auto" }}>
        Join thousands of professionals who already use Exponent Practice to ace
        their job interviews
      </Header>
      <Grid container spacing={2}>
        {feedbacks.slice(0, visibleFeedbacks).map((feedback, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FeedbackCard
              name={feedback.name}
              rating={feedback.rating}
              image={feedback.image}
              description={feedback.description}
            />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" marginTop={4}>
        <Button variant="contained" onClick={showMoreFeedback}>
          Show More Feedback
        </Button>
      </Box>
    </Container>
  );
};

export default FeedbackSection;
