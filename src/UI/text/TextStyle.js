import { appTheme } from "themes/themes";

export const variants = {
  h5: {
    fontSize: "20px",
    lineHeight: "28px",
    [appTheme.breakpoints.between("mobile", "tablet")]: {
      fontSize: "11px",
    },
  },
  body1: {
    fontSize: "16px",
    lineHeight: "24px",
  },
  body2: {
    fontSize: "14px",
    lineHeight: "22px",
  },
};
