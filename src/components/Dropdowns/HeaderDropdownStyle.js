import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  ${({ isMobile }) =>
    isMobile &&
    `
    width: 100%;
  `}
`;

export const DropdownButton = styled.div`
  color: black;
  padding: 12px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  background: none;

  @media (max-width: 900px) {
    width: 100%;
    text-align: left;
    padding: 0px;
  }
`;

export const DropdownContent = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  animation: ${fadeIn} 0.3s ease-in-out;

  ${({ isMobile }) =>
    isMobile &&
    `
    position: relative;
    box-shadow: none;
    width: 100%;
  `}

  @media(max-width:900px) {
    align-items: start;
  }
`;

export const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;

  &:hover {
    background-color: #e9e9e9;
  }

  @media (max-width: 900px) {
    padding: 12px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 900px) {
    margin-left: 8px;
  }
`;
