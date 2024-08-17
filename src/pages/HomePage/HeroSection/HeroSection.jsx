import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  SliderContainer,
  Slide,
  TextCard,
  VideoWrapper,
  PracticeButton,
} from "pages/HomePage/HeroSection/HeroSectionStyles";
import img from "assets/images/mockBanner.jpg";
import bannerBgImage from "assets/images/bannerBgImage.webp";
import video from "assets/videos/HeroSectionVideoSlide1.mp4";
import { IconButton, Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const bannerDetail = [
  {
    title: "Ace Your Tech Interviews with Real-Time Practice",
    Description:
      "Connect with aspiring tech professionals and sharpen your interview skills. Practice live coding challenges, solve real-world problems, and receive valuable feedback—all in a supportive online community.",
    bannerImg: img,
  },
  {
    title: "Master the Art of Interviewing with Peer Practice",
    Description:
      " Elevate your tech interview game by collaborating with fellow candidates. Engage in realistic interview scenarios, enhance your confidence, sharpen your skills, and get personalized insights to land your dream job.",
    bannerImg: img,
  },
  {
    title: "Get Ready for Tech Interviews with Real-World Practice",
    Description:
      "Prepare for your next big interview by practicing with peers. Tackle genuine interview questions, enhance your problem-solving abilities, and build the confidence to succeed, all in a dynamic and interactive setting.",
    bannerImg: img,
  },
];

const HeroSection = () => {
  const sliderRef = React.useRef(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const settings = {
    arrows: false, // Disable default arrows
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <SliderContainer>
        <Slider {...settings} ref={sliderRef}>
          {bannerDetail.map((banner, index) => (
            <Slide key={index} backgroundImage={bannerBgImage}>
              <TextCard>
                <div className="banner-title">{banner.title}</div>
                <p className="banner-description">{banner.Description}</p>
                <PracticeButton>Start Free Practice</PracticeButton>
              </TextCard>
              <VideoWrapper>
                <video className="video-player" width="100%" controls>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </VideoWrapper>
            </Slide>
          ))}
        </Slider>
      </SliderContainer>
      <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
        <IconButton onClick={goToPrev}>
          <ArrowBackIosIcon />
        </IconButton>
        {bannerDetail.map((_, index) => (
          <Box
            key={index}
            width={10}
            height={10}
            borderRadius="50%"
            bgcolor={currentSlide === index ? "primary.main" : "grey.400"}
            mx={1}
          />
        ))}
        <IconButton onClick={goToNext}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default HeroSection;
