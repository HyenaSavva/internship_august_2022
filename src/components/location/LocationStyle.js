import css from "styled-jsx/css";
import { appTheme } from "themes/themes";

export default css`
  .location {
    border-bottom: 1px solid #e4e7ec;
  }

  /* mobile */
  @media screen and (max-width: 639px) {
    .location {
      width: 100%;
    }

    .location__image {
      width: 308px;
      height: auto;
      margin: 32px;
    }
  }

  /* tablet */

  @media (min-width: 640px) and (max-width: 1023px) {
    .location {
      width: 60vw;
    }

    .location__image {
      width: 446px;
      height: 344px;
      margin: 32px;
    }
  }

  /* laptop */

  @media (min-width: 1024px) and (max-width: 1199px) {
    .location {
      width: 60vw;
    }

    .location__image {
      width: 446px;
      height: 344px;
      margin-bottom: 32px;
    }
  }

  /* desktop */

  @media (min-width: 1200px) {
    .location {
      width: 750px;
    }

    .location__image {
      width: 713px;
      height: 382px;
      margin-bottom: 32px;
    }
  }
`;

export const locationTitle = {
  fontWeight: "700",

  [appTheme.breakpoints.only("mobile")]: {
    margin: "12px",
  },
  [appTheme.breakpoints.only("tablet")]: {
    marginBottom: "12px",
  },
  [appTheme.breakpoints.only("laptop")]: {
    marginBottom: "12px",
  },
  [appTheme.breakpoints.only("desktop")]: {
    marginBottom: "4px",
  },
};

export const locationSubtitle = {
  [appTheme.breakpoints.only("mobile")]: {
    marginLeft: "12px",
  },
  [appTheme.breakpoints.only("tablet")]: {
    marginBottom: "12px",
  },
  [appTheme.breakpoints.only("laptop")]: {
    marginBottom: "12px",
  },
  [appTheme.breakpoints.only("desktop")]: {
    marginBottom: "12px",
  },
};
