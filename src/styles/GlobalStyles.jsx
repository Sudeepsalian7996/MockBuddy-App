// GlobalStyles.jsx
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fonts.body};
    background-color: #f5f5f5;
    color: #032d60;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  // Apply the Roboto font to all text elements
  h1, h2, h3, h4, h5, h6, p, a, span, div {
    font-family: ${(props) => props.theme.fonts.body};
  }
`;

export default GlobalStyles;
