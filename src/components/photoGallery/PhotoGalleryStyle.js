import css from "styled-jsx/css";
import { appTheme } from "themes/themes";

export default css`
  .photo-gallery {
    position: relative;
  }

  /* mobile */
  @media screen and (max-width: 639px) {
    .photo-gallery {
      margin-top: 24px;
    }
  }

  /* tablet */

  @media (min-width: 640px) and (max-width: 1023px) {
    .photo-gallery {
      margin-top: 48px;
    }
  }

  /* laptop */

  @media (min-width: 1024px) and (max-width: 1199px) {
    .photo-gallery {
      margin-top: 68px;
    }
  }

  /* desktop */

  @media (min-width: 1200px) {
    .photo-gallery {
      margin-top: 68px;
    }
  }
`;

export const showBtn = {
  position: "absolute",
  backgroundColor: "#fff",
  border: "solid 1px #1976d2",
  "&:hover": {
    backgroundColor: "#fff",
  },

  [appTheme.breakpoints.only("mobile")]: {
    top: "92%",
    right: "1%",
  },

  [appTheme.breakpoints.only("tablet")]: {
    top: "95%",
    right: "1%",
  },

  [appTheme.breakpoints.only("laptop")]: {
    top: "88%",
    right: "0%",
  },

  [appTheme.breakpoints.only("desktop")]: {
    height: "36px",
    width: "auto",
    top: "93%",
    right: "1%",
  },
};

export const imageListStyles = {
  borderRadius: "12px",
  margin: "auto",
  position: "relative",
  [appTheme.breakpoints.only("mobile")]: {
    width: "100vw",
    paading: "0px",
  },
  [appTheme.breakpoints.only("tablet")]: {
    width: "100%",
  },
  [appTheme.breakpoints.only("laptop")]: {
    width: "100%",
  },
  [appTheme.breakpoints.only("desktop")]: {
    width: "100%",
    height: "48%",
  },
};
