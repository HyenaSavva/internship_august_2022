import css from "styled-jsx/css";

export default css`
  .select {
    display: block;
    color: #d0d5dd;
    padding: 0.6em 1.4em 0.5em 0.8em;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #d0d5dd;
    border-radius: 8px;
  }

  .select::selection {
    color: #000;
  }

  .select:active {
    color: #000;
  }

  .select option:checked {
    color: #000;
  }

  .select-error {
    border-color: #dd1018;
  }

  .error {
    color: #dd1018;
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
