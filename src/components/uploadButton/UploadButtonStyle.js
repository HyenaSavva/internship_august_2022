import { appTheme } from "themes/themes";

export const addBtn = {
  borderRadius: "12px",
  backgroundColor: "#F2F4F7",

  [appTheme.breakpoints.only("mobile")]: {},
  [appTheme.breakpoints.only("tablet")]: {},
  [appTheme.breakpoints.only("laptop")]: {},
  [appTheme.breakpoints.only("desktop")]: {
    width: "164px",
    height: "128px",
  },
};

export const addIcon = {
  color: "#667085",

  [appTheme.breakpoints.only("mobile")]: {},
  [appTheme.breakpoints.only("tablet")]: {},
  [appTheme.breakpoints.only("laptop")]: {},
  [appTheme.breakpoints.only("desktop")]: {
    fontSize: "40px",
  },
};

export const addBtnError = {
  borderRadius: "12px",
  backgroundColor: "#F2F4F7",
  borderColor: "#DD1018",

  [appTheme.breakpoints.only("mobile")]: {},
  [appTheme.breakpoints.only("tablet")]: {},
  [appTheme.breakpoints.only("laptop")]: {},
  [appTheme.breakpoints.only("desktop")]: {
    width: "164px",
    height: "128px",
  },
};
