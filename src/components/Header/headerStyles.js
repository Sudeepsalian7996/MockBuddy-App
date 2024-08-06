import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: ${({ mobile }) => (!mobile ? "relative" : "")};
  left: ${({ mobile }) => (!mobile ? "4rem" : "0rem")};

  .header-logo {
    width: 3.5rem;
  }
`;

export const TextTranform = styled.button`
  text-transform: none;
`;
