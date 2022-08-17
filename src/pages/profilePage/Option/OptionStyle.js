import css from "styled-jsx/css";
import { appTheme } from "themes/themes";

export default css``;

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
