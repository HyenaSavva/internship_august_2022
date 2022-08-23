import { appTheme } from "themes/themes";

export const btnStyle = {
  textTransform: "none",
  fontWeight: "600",
  lineHeight: "22px",
  borderRadius: "8px",
};

export const defaultBtn = {
  border: "solid 1px #1976d2",
  backgroundColor: "#fff",
  "&:hover": {
    backgroundColor: "#fff",
  },
  [appTheme.breakpoints.only("mobile")]: { fontSize: "10px" },
  [appTheme.breakpoints.only("tablet")]: { fontSize: "10px" },
  [appTheme.breakpoints.only("laptop")]: { fontSize: "14px" },
  [appTheme.breakpoints.only("desktop")]: {
    width: "165px",
    height: "44px",
    fontSize: "14px",
    marginRight: "30px",
  },
};

export const primaryBtn = {
  backgroundColor: appTheme.palette.primary.main,
  color: "#fff",
  "&:hover": {
    backgroundColor: appTheme.palette.primary.main,
    color: "#fff",
  },
  [appTheme.breakpoints.only("mobile")]: {
    fontSize: "10px",
  },
  [appTheme.breakpoints.only("tablet")]: {
    fontSize: "10px",
  },
  [appTheme.breakpoints.only("laptop")]: {
    fontSize: "14px",
  },
  [appTheme.breakpoints.only("desktop")]: {
    width: "165px",
    height: "44px",
    fontSize: "14px",
  },
};
