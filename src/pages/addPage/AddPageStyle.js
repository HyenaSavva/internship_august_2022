import { appTheme } from "themes/themes";
import css from "styled-jsx/css";

export default css`
  .add-page__bottom-btns {
    display: flex;
    justify-content: flex-end;
  }

  .add-page__media {
    border-bottom: 1px solid #e4e7ec;
    display: flex;
    justify-content: space-between;
  }

  .add-page__media__buttons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .add-page__media__title-subtitle {
    display: flex;
    flex-direction: column;
  }

  .add-page__media__buttons-wrapper {
    display: flex;
    flex-direction: column;
  }

  .error {
    color: #dd1018;
  }

  /* desktop */

  @media (min-width: 1200px) {
    .add-page {
      width: 847px;
      margin-top: 32px;
      margin-left: 390px;
    }

    .add-page__form {
      display: flex;
      flex-direction: column;
    }

    .add-page__media {
      margin-top: 40px;
    }

    .add-page__bottom-btns {
      margin-top: 40px;
      margin-bottom: 60px;
    }

    .add-page__media__buttons {
      gap: 30px;
      margin-bottom: 10px;
    }

    .error {
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
    }

    .add-page__media__buttons-wrapper {
      margin-bottom: 40px;
    }
  }
`;

export const addTitle = {
  fontWeight: "700",
  [appTheme.breakpoints.only("desktop")]: {
    fontSize: "32px",
    lineHeight: "40px",
    marginBottom: "24px",
  },
};

export const previewBtn = {
  [appTheme.breakpoints.only("desktop")]: {
    width: "165px",
    height: "44px",
    fontSize: "14px",
    marginRight: "30px",
  },
};

export const publishBtn = {
  backgroundColor: appTheme.palette.primary.main,
  color: "#fff",
  "&:hover": {
    backgroundColor: appTheme.palette.primary.main,
    color: "#fff",
  },
  [appTheme.breakpoints.only("desktop")]: {
    width: "165px",
    height: "44px",
    fontSize: "14px",
  },
};
