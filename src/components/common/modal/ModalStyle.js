import css from "styled-jsx/css";
import { appTheme } from "themes/themes";

export default css`
  .modal {
    position: absolute;
    background-color: #fff;
    z-index: 100;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 12%);
  }

  .modal__header {
    display: flex;
    justify-content: space-between;
  }

  /* mobile */
  @media screen and (max-width: 639px) {
    .modal {
      top: 0px;
      left: 0px;
      width: 100%;
      height: 80vh;
    }

    .modal__header {
      margin: 36px;
    }
  }

  /* tablet */

  @media (min-width: 640px) and (max-width: 1023px) {
    .modal {
      top: 0px;
      left: 0px;
      width: 100%;
      height: 80vh;
    }

    .modal__header {
      margin: 36px;
    }
  }

  /* laptop */

  @media (min-width: 1024px) and (max-width: 1199px) {
    .modal {
      top: 0px;
      left: 0px;
      width: 100%;
      height: 80vh;
    }

    .modal__header {
      margin: 36px;
    }
  }

  /* desktop */

  @media (min-width: 1200px) {
    .modal {
      top: 0px;
      left: 0px;
      width: 100%;
      height: 80vh;
    }

    .modal__header {
      margin: 36px;
    }
  }
`;

export const modalImageListStyles = {
  [appTheme.breakpoints.only("mobile")]: {
    width: "100%",
    height: "56vh",
    margin: "20px auto",
  },
  [appTheme.breakpoints.only("tablet")]: {
    width: "100%",
    height: "56vh",
    margin: "20px auto",
  },
  [appTheme.breakpoints.only("laptop")]: {
    width: "100%",
    height: "56vh",
    margin: "20px auto",
  },
  [appTheme.breakpoints.only("desktop")]: {
    width: "678px",
    height: "56vh",
    margin: "20px auto",
  },
};
