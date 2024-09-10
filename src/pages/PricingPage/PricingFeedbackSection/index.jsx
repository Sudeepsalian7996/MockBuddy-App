import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { feedbackData } from "pages/PricingPage/PricingFeedbackSection/FeedbackData";
import { SliderContainer } from "pages/HomePage/HeroSection/HeroSectionStyles";
import PricingFeedbackCard from "./PricingFeedbackCard";
const PricingFeedback = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false, // No navigation dots
    infinite: true, // Infinite loop sliding
    speed: 5000, // Slow motion transition speed (15 seconds)
    slidesToShow: 4, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 0, // Set to 0 for continuous sliding (no pause)
    cssEase: "linear", // Smooth, linear motion
    pauseOnHover: false, // Disable pausing when hovered
  };
  return (
    <SliderContainer>
      <Slider {...settings} ref={sliderRef}>
        {feedbackData.map((feedback, index) => (
          <PricingFeedbackCard feedback={feedback} index={index} />
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default PricingFeedback;
