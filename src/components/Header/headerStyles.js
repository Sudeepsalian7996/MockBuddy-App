import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  left: 4rem;

  .header-logo {
    width: 3.5rem;
  }

  @media (max-width: 900px) {
    left: 0;
  }
  @media (max-width: 900px) {
    display: none;
    img {
      display: block;
    }
  }
`;

export const TextTranform = styled.button`
  text-transform: none;
`;
