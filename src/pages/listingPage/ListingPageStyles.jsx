import styled from "styled-components";
import { appTheme } from "themes/themes";
import css from "styled-jsx/css";

export const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "a  b";
  &:nth-child(2): {
    align-self: end;
  }
`;

export const shareBtn = {
  width: 92,
  color: "primary",
  fontSize: "14px",
  fontWeight: "600",

  "&:hover": {
    backgroundColor: "#fff",
  },
};



export default css`
  .custom-div {
    max-width: calc(100% - 780px);
    margin: auto;
  }
`;
