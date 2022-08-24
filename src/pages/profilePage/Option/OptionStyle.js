import css from "styled-jsx/css";
import { appTheme } from "themes/themes";

export default css`
  .edit {
    color: #0241ae;
    font-weight: 600;
  }

  .info {
    position: absolute;
    right: 518px;
    top: 23px;
    min-width: 50%;
    width: 120px;
  }

  .info label {
    cursor: pointer;
  }

  .summary {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  },
`;

export const optionStyle = {
  "& .MuiButtonBase-root": {
    width: "50px",
    marginLeft: "90%",
  },
};

export const button = {
  margin: "0",
  width: "117px",
  color: "#fff",
  backgroundColor: appTheme.palette.primary.main,
  "&:hover": {
    backgroundColor: "rgb(2 60 162)",
  },
};

export const summary = {
  height: "90px",
  width: "100%",
  padding: "0",
  "& p": {
    margin: 0,
    height: "20px",
    fontSize: "14px",
    color: "#667085",
    fontWeight: "400",
    width: "125%",
  },
};

export const details = {
  "& .MuiButtonBase-root": {
    width: "117px",
    height: "44px",
    margin: "0",
  },
  padding: "0",
  marginBottom: "20px",
  fontSize: "12px",
};
