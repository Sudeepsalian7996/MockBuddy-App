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
import video from "assets/videos/video.mp4";
import { IconButton, Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const bannerDetail = [
  {
    title: "Meet Surface Pro",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur nec eros nulla. Aliquam erat volutpat.",
    bannerImg: img,
  },
  {
    title: "Meet Surface Pro",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur nec eros nulla. Aliquam erat volutpat.",
    bannerImg: img,
  },
  {
    title: "Meet Surface Pro",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur nec eros nulla. Aliquam erat volutpat.",
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
