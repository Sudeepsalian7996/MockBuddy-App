import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { feedbackData } from "pages/PricingPage/PricingFeedbackSection/FeedbackData";
import { SliderContainer } from "pages/HomePage/HeroSection/HeroSectionStyles";
import PricingFeedbackCard from "./PricingFeedbackCard";
import { Typography } from "@mui/material";
const PricingFeedback = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 15000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    slidesToShow: 4, // default for large screens
    responsive: [
      {
        breakpoint: 1200, // Laptops and large desktops
        settings: {
          slidesToShow: 3, // show 3 slides
        },
      },
      {
        breakpoint: 992, // Tablets and small laptops
        settings: {
          slidesToShow: 2, // show 2 slides
        },
      },
      {
        breakpoint: 500, // Mobile screens
        settings: {
          slidesToShow: 1, // show 1 slide
        },
      },
    ],
  };

  return (
    <>
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: 700,
          textAlign: "center",
          margin: "5rem 0 3rem 0",
        }}
      >
        Customer Feedback on Career Plans
      </Typography>
      <Slider {...settings} ref={sliderRef}>
        {feedbackData.map((feedback, index) => (
          <PricingFeedbackCard feedback={feedback} index={index} />
        ))}
      </Slider>
    </>
  );
};

export default PricingFeedback;
