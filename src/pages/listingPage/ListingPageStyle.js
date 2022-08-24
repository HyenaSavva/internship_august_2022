import css from "styled-jsx/css";
import { appTheme } from "themes/themes";

export default css.global`
  .listing-page {
    padding-top: 100px;
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  .listing-page__top-details {
    display: flex;
    justify-content: space-between;
  }

  .listing-page__middle-details {
    display: flex;
    justify-content: space-between;
  }

  .listing-page__seller-btns {
    display: flex;
    flex-direction: column;
  }

  .listing-page__btns {
    display: flex;
    justify-content: space-between;
  }

  /* mobile */
  @media screen and (max-width: 639px) {
    .listing-page {
      width: 100%;
    }

    .listing-page__top-details {
      margin: 24px 16px;
    }

    .listing-page__middle-details {
      display: flex;
      flex-direction: column;
    }

    .listing-page__description {
      margin: 0 16px;
    }

    .listing-page__seller-btns {
      margin: 24px auto;
    }

    .listing-page__seller {
      margin-bottom: 24px;
    }
  }

  /* tablet */

  @media (min-width: 640px) and (max-width: 1023px) {
    .listing-page {
      max-width: calc(100% - 170px);
    }

    .listing-page__top-details {
      margin: 24px 16px;
    }

    .listing-page__middle-details {
      display: flex;
      flex-direction: column;
    }

    .listing-page__description {
      margin: 0 16px;
    }

    .listing-page__seller-btns {
      margin: 24px;
    }

    .listing-page__seller {
      margin-bottom: 24px;
    }
  }

  /* laptop */

  @media (min-width: 1024px) and (max-width: 1199px) {
    .listing-page {
      max-width: calc(100% - 410px);
    }

    .listing-page__top-details {
      margin: 24px 16px;
    }

    .listing-page__middle-details {
      display: flex;
      flex-direction: column;
    }

    .listing-page__description {
      margin: 0 16px;
    }

    .listing-page__seller-btns {
      margin: 24px;
    }

    .listing-page__seller {
      margin-bottom: 24px;
    }
  }

  /* desktop */

  @media (min-width: 1200px) {
    .listing-page {
      max-width: calc(100% - 780px);
    }

    .listing-page__top-details {
      margin-top: 24px;
      margin-bottom: 32px;
    }

    .listing-page__seller {
      margin-bottom: 16px;
    }

    .listing-page__bottom-details {
      margin-top: 32px;
    }
  }
`;

export const shareBtn = {
  width: 92,
  color: appTheme.palette.primary.main,
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: "#fff",
  },
};

export const purchaseBtn = {
  [appTheme.breakpoints.only("mobile")]: {
    width: "144px",
    height: "38px",
  },

  [appTheme.breakpoints.only("tablet")]: {
    width: "200px",
    height: "44px",
  },

  [appTheme.breakpoints.only("laptop")]: {
    width: "244px",
    height: "40px",
  },

  [appTheme.breakpoints.only("desktop")]: {
    width: "304px",
    height: "44px",
  },
};

export const favoriteBtn = {
  border: "1px solid #0241AE",
  borderRadius: "8px",
  color: "#0241AE",

  [appTheme.breakpoints.only("mobile")]: {
    width: "36px",
    height: "36px",
  },

  [appTheme.breakpoints.only("tablet")]: {
    width: "38px",
    height: "38px",
  },

  [appTheme.breakpoints.only("laptop")]: {
    width: "40px",
    height: "40px",
  },

  [appTheme.breakpoints.only("desktop")]: {
    width: "44px",
    height: "44px",
  },
};

export const propertyTitle = {
  color: "#4D5464",
  fontWeight: "700",
};

export const propertyPrice = {
  color: "#1C1C1E",
  fontWeight: "700",
};
