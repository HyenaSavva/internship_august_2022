import css from "styled-jsx/css";

export default css`
  .text-input__wrapper {
    display: flex;
    flex-direction: column;
  }

  .text-input {
    border-radius: 8px;
    border: 1px solid #d0d5dd;
  }

  .text-input::placeholder {
    color: #d0d5dd;
  }

  .text-input-error {
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
    .text-input__label {
      font-size: 14px;
    }

    .text-input {
      width: 554px;
      height: 44px;
      margin-top: 4px;
    }

    .text-input::placeholder {
      font-size: 16px;
    }

    .error {
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      margin-top: 12px;
    }
  }
`;
