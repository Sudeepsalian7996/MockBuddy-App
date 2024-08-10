import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";

export const StyledCard = styled(Card)`
  margin-bottom: 16px;
  padding: 2rem;
  height: 380px;
  flex-direction: column;
  overflow: hidden;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const UserAvatar = styled(Avatar)`
  width: 64px;
  height: 64px;
  margin-bottom: 8px;

  @media (min-width: 600px) {
    margin-right: 16px;
    margin-bottom: 0;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
