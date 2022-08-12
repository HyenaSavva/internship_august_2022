import css from "styled-jsx/css";
import { appTheme } from "themes/themes";

export default css.global`
  .listing-page {
    max-width: calc(100% - 780px);
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  .listing-page__top-details {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    margin-bottom: 32px;
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

  /* small */
  @media screen and (max-width: 480px) {
    .listing-page__top-details {
      margin: 24px 16px;
    }

    .listing-page__description {
      margin: 0 16px;
    }
  }

  /* medium */

  @media (min-width: 481px) and (max-width: 1024px) {
  }

  /* large */
  @media (min-width: 1025px) {
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
  color: "#fff",
  width: "304px",
  height: "44px",
  backgroundColor: appTheme.palette.primary.main,
  "&:hover": {
    backgroundColor: appTheme.palette.primary.main,
  },
};

export const favoriteBtn = {
  width: "44px",
  height: "44px",
  border: "1px solid #0241AE",
  borderRadius: "8px",
  color: "#0241AE",
};

export const propertyTitle = {
  color: "#4D5464",
  fontWeight: "700",
};

export const propertyPrice = {
  color: "#1C1C1E",
  fontWeight: "700",
};
