import { appTheme } from "themes/themes";

export const btnStyles = {
  textTransform: "none",
  fontWeight: "600",
  lineHeight: "22px",
  borderRadius: "8px",

  [appTheme.breakpoints.only("mobile")]: {
    fontSize: "10px",
  },

  [appTheme.breakpoints.only("tablet")]: {
    fontSize: "12px",
  },

  [appTheme.breakpoints.only("laptop")]: {
    fontSize: "14px",
  },

  [appTheme.breakpoints.only("desktop")]: {
    fontSize: "14px",
  },
};
