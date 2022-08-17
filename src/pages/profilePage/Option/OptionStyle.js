import css from "styled-jsx/css";
import { appTheme } from "themes/themes";

export default css`
  .title {
    margin: 0 0 12px 0;
    font-weight: 700;
    font-size: 24px;
    color: #1c1c1e;
  }
`;

export const Acordion = {
  ".MuiPaper-root": {
    height: "90px",
  },
};

export const Component = {};

export const summary = {
  height: "90px",
  width: "100%",
  padding: "0",
  ".summary": {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  "& p": {
    margin: 0,
    height: "20px",
    fontSize: "14px",
    color: "#667085",
    fontWeight: "400",
  },
};

export const details = {
  padding: "0",
  marginBottom: "20px",
  fontSize: "12px",
};

export const button = {
  width: "117px",
  height: "44px",
  color: "#fff",
  backgroundColor: appTheme.palette.primary.main,
  "&:hover": {
    backgroundColor: "rgb(2 60 162)",
  },
};
