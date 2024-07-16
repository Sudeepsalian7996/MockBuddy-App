import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {
  DropdownContainer,
  DropdownContent,
  DropdownButton,
  DropdownItem,
  IconWrapper,
} from "./HeaderDropdownStyle";
import { Padding } from "@mui/icons-material";

const HeaderDropdown = ({ items, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 900);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsOpen(false);
    }
  };

  const handleButtonClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <DropdownContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      isMobile={isMobile}
    >
      <DropdownButton onClick={handleButtonClick}>
        <IconWrapper>
          {name}
          {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconWrapper>
      </DropdownButton>
      <DropdownContent open={isOpen} isMobile={isMobile}>
        {items.map((item, index) => (
          <DropdownItem key={index} href={item.url}>
            {item.label}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default HeaderDropdown;
