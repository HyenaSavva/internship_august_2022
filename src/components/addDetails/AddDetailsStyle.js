import css from "styled-jsx/css";
import { appTheme } from "themes/themes";

export default css.global`
  .add-details {
    border-bottom: 1px solid #e4e7ec;
    display: flex;
    justify-content: space-between;
  }

  .add-details__title-subtitle {
    width: 30%;
  }

  .add-details__inputs {
    display: flex;
    flex-direction: column;
  }

  .add-details__category {
    display: flex;
    flex-direction: column;
  }

  .add-details__price {
    display: flex;
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
    .add-details__price-input {
      width: 277px !important;
    }

    .add-details__inputs {
      margin-bottom: 40px;
      margin-left: 66px;
    }
  }
`;

export const titleInput = {
  [appTheme.breakpoints.only("mobile")]: {},
  [appTheme.breakpoints.only("tablet")]: {},
  [appTheme.breakpoints.only("laptop")]: {},
  [appTheme.breakpoints.only("desktop")]: {
    width: "554px",
    height: "44px",
  },
};

export const categoryInput = {
  borderRadius: "8px",
  [appTheme.breakpoints.only("mobile")]: {},
  [appTheme.breakpoints.only("tablet")]: {},
  [appTheme.breakpoints.only("laptop")]: {},
  [appTheme.breakpoints.only("desktop")]: {
    width: "554px",
    height: "44px",
  },
};

export const textPrice = {
  position: "relative",
  [appTheme.breakpoints.only("mobile")]: {},
  [appTheme.breakpoints.only("tablet")]: {},
  [appTheme.breakpoints.only("laptop")]: {},
  [appTheme.breakpoints.only("desktop")]: {
    top: "57%",
    left: "92%",
  },
};
