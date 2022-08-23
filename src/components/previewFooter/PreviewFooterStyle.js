import css from "styled-jsx/css";
import { appTheme } from "themes/themes";

export default css`
  .preview-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    /* left: 0;
    right: 0; */
    background-color: #f2f4f7;
    border-top: 1px solid #d0d5dd;
    padding: 0px;
    gap: 24px;
    z-index: 2;
  }

  .preview-footer__buttons {
    display: flex;
    justify-content: space-between;
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
    .preview-footer__buttons {
      margin-bottom: 23px;
    }
  }
`;

export const footerTitle = {
  color: "#4D5464",
  fontWeight: "600",
  [appTheme.breakpoints.only("mobile")]: {},
  [appTheme.breakpoints.only("tablet")]: {},
  [appTheme.breakpoints.only("laptop")]: {},
  [appTheme.breakpoints.only("desktop")]: {
    marginTop: "23px",
  },
};
