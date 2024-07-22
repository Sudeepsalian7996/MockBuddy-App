import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60vh; /* 60% of the viewport height */
  overflow: hidden; /* To ensure no overflow from images */
  .slick-slider {
    height: 100%;
  }

  .slick-list {
    height: 100%;
  }

  .slick-slide > div {
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

export const Slide = styled.div`
  display: flex !important;
  gap: 3rem;
  align-items: center;
  height: 60vh;
  width: 100%;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
  padding: 0 5%; /* Add some padding to left and right */
`;

export const ArrowsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const CustomArrow = styled.button`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

export const TextCard = styled.div`
  width: 45%;
  padding: 5rem;
  .banner-title {
    font-size: 4rem;
    margin-bottom: 1.7rem;
    font-weight: 700;
  }
  .banner-description {
    font-size: 1.2rem;
    margin-bottom: 1.7rem;
  }
`;

export const VideoWrapper = styled.div`
  flex: 0.6 1 25%;
  margin-left: 1rem;

  .video-player {
    border-radius: 1rem;
  }
`;

export const PracticeButton = styled.button`
  border-style: none;
  padding: 0.8rem 2rem;
  color: white;
  font-weight: 600;
  background-color: #0176d3;
  border-radius: 0.3rem;
  font-size: 1rem;
  transition: background-color 0.5s, cursor 0.5s;

  &:hover {
    background-color: #11578f;
    cursor: pointer;
  }
`;
