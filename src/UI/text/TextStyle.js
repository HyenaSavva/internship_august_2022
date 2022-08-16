import { appTheme } from "themes/themes";

export const variants = {
  h5: {
    fontWeight: "700",
    [appTheme.breakpoints.between("mobile", "tablet")]: {
      fontSize: "11px",
    },
    [appTheme.breakpoints.only("mobile")]: {},
    [appTheme.breakpoints.only("tablet")]: {},
    [appTheme.breakpoints.only("laptop")]: {},
    [appTheme.breakpoints.only("desktop")]: {
      fontSize: "20px",
      lineHeight: "28px",
    },
  },

  h6: {
    fontWeight: "700",
    [appTheme.breakpoints.only("mobile")]: {},
    [appTheme.breakpoints.only("tablet")]: {},
    [appTheme.breakpoints.only("laptop")]: {},
    [appTheme.breakpoints.only("desktop")]: {
      fontSize: "18px",
      lineHeight: "26px",
    },
  },

  body1: {
    [appTheme.breakpoints.only("mobile")]: {},
    [appTheme.breakpoints.only("tablet")]: {},
    [appTheme.breakpoints.only("laptop")]: {},
    [appTheme.breakpoints.only("desktop")]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
  },

  body2: {
    [appTheme.breakpoints.only("mobile")]: {},
    [appTheme.breakpoints.only("tablet")]: {},
    [appTheme.breakpoints.only("laptop")]: {},
    [appTheme.breakpoints.only("desktop")]: {
      fontSize: "14px",
      lineHeight: "22px",
    },
  },
};
