import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
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

  @media (min-width: 900px) {
    height: 60vh;
  }
`;

export const Slide = styled.div`
  display: flex !important;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  width: 100%;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
  padding: 0 5%;

  @media (min-width: 900px) {
    height: 60vh;
    flex-direction: row;
  }
  @media (max-width: 550px) {
    padding: 1.5rem;
  }

  @media (min-width: 550px) and (max-width: 900px) {
    padding: 3rem;
  }
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
  .banner-title {
    font-size: 4rem;
    margin-bottom: 1.7rem;
    font-weight: 700;
  }
  .banner-description {
    font-size: 1.2rem;
    margin-bottom: 1.7rem;
  }

  @media (min-width: 900px) {
    width: 45%;
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.1rem;
    background-color: white;
    padding: 1rem;
    border-radius: 0.7rem;

    .banner-title {
      margin: 0;
      font-size: 3rem;
      text-align:center
    }

    .banner-description {
      font-size: 1rem;
      margin: 0;
      color: "#4B5563";
    }

    @media (min-width:1275px){
     padding: 5rem;

     .banner-description {
      width:80%;
    }
    }
  }

   @media (min-width: 550px) and (max-width: 900px) {
      padding: 2rem;
      gap:1.4rem 
      padding: 0.5rem;

      .banner-description {
         width: 75%;
    }
  }

  @media (min-width:1400px) {
  .banner-description {
         width: 80%;
    }
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
  font-size: 1.1rem;
  transition: background-color 0.5s, cursor 0.5s;

  ${({ section }) =>
    section === "whyPractice" &&
    `
    margin-top: 1.75rem;
  `}
  &:hover {
    background-color: #11578f;
    cursor: pointer;
  }
`;
