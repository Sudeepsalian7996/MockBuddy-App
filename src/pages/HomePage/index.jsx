import React from "react";
import HeroSection from "pages/HomePage/HeroSection/HeroSection";
import FeedbackSection from "pages/HomePage/FeedbackSection/FeedbackSection";
import PracticeInfoSection from "pages/HomePage/PracticeInfoSection";
import WhyPracticeSection from "pages/HomePage/WhyPracticeSection";
import WhoCanUseSection from "pages/HomePage/WhoCanUseSection";
import RealInterviewPractice from "pages/HomePage/RealInterviewPractice";
import HowItWorksSection from "pages/HomePage/HowItWorksSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <RealInterviewPractice />
      <HowItWorksSection />
      <WhoCanUseSection />
      <PracticeInfoSection />
      <WhyPracticeSection />
      <FeedbackSection />
    </>
  );
};

export default HomePage;
