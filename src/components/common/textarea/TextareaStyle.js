import css from "styled-jsx/css";
import { appTheme } from "themes/themes";

export default css`
  .textarea-wrapper {
    display: flex;
    flex-direction: column;
  }

  .textarea {
    border-color: #d0d5dd;
    border-radius: 8px;
  }

  .textarea-error {
    border-color: #dd1018;
  }

  .error {
    color: #dd1018;
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
    .textarea__label {
      margin-bottom: 8px;
      font-size: 14px;
    }

    .textarea {
      width: 554px;
      height: 200px;
    }

    .error {
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      margin-top: 10px;
      margin-bottom: 40px;
    }
  }
`;

export const helperText = {
  color: "#596274",
  [appTheme.breakpoints.only("mobile")]: {},
  [appTheme.breakpoints.only("tablet")]: {},
  [appTheme.breakpoints.only("laptop")]: {},
  [appTheme.breakpoints.only("desktop")]: {
    fontSize: "12px",
    lineHeight: "20px",
    marginBottom: "40px",
  },
};
