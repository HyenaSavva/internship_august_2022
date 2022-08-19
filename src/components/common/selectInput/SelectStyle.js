import css from "styled-jsx/css";

export default css`
  .select {
    border-radius: 8px;
    border: 1px solid #d0d5dd;
    color: #d0d5dd;
  }

  .select__option {
    color: #1c1c1e !important;
  }

  .select-error {
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
    .select__wrapper {
      margin: 24px auto;
    }

    .select__label {
      font-size: 14px;
    }

    .select {
      width: 554px;
      height: 44px;
      font-size: 16px;
      margin-top: 4px;
    }

    .error {
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      margin-top: 12px;
    }
  }
`;
