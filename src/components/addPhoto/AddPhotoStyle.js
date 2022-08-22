import css from "styled-jsx/css";
import { appTheme } from "themes/themes";

export default css`
  .add-photo {
    border-radius: 12px;
    object-fit: cover;
  }

  .add-photo__image {
    position: relative;
  }

  /* mobile */
  @media screen and (max-width: 639px) {
  }

  /* tablet */

  @media (min-width: 640px) and (max-width: 1023px) {
  }

  /* laptop */

  @media (min-width: 1024px) and (max-width: 1199px) {
  }

  /* desktop */

  @media (min-width: 1200px) {
    .add-photo {
      width: 164px;
      height: 128px;
    }
  }
`;

export const closeBtn = {
  "& .css-1vooibu-MuiSvgIcon-root": {
    backgroundColor: "#fff",
    borderRadius: "8px",
  },
  [appTheme.breakpoints.only("mobile")]: {},
  [appTheme.breakpoints.only("tablet")]: {},
  [appTheme.breakpoints.only("laptop")]: {},
  [appTheme.breakpoints.only("desktop")]: {
    position: "absolute",
    top: "0%",
    right: "1%",
  },
};

export const dialog = {
  "& .css-1hju3x6-MuiPaper-root-MuiDialog-paper": {
    backgroundColor: "#ef5354",
  },
};
