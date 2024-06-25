import "./App.css";
import styled from "styled-components";

export const StyledInfo1 = styled.div`
  background: ${({ theme }) => theme.colors.dark};
  padding: 1rem;
  margin: 1rem 0;
  color: orange;
  font-family: ${({ theme }) => theme.fonts.body};
`;

function App() {
  return <StyledInfo1>Name is SUDEEP</StyledInfo1>;
}

export default App;
