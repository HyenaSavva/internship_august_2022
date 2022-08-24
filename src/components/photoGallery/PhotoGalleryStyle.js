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
    top: "90%",
    right: "0.5%",
  },
};

export const imageListStyles = {
  borderRadius: "12px",
  margin: "auto",
  position: "relative",
  width: "100%",
  [appTheme.breakpoints.only("mobile")]: {
    paading: "0px",
  },
  [appTheme.breakpoints.only("tablet")]: {},
  [appTheme.breakpoints.only("laptop")]: {},
  [appTheme.breakpoints.only("desktop")]: {
    height: "48%",
  },
};
