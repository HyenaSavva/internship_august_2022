import css from "styled-jsx/css";

export default css.global`
  .add-contact-info {
    border-bottom: 1px solid #e4e7ec;
    display: flex;
    justify-content: space-between;
  }

  .add-contact-info__title-subtitle {
    display: flex;
    flex-direction: column;
  }

  .add-contact-info__inputs {
    display: flex;
    flex-direction: column;
  }

  /* desktop */

  @media (min-width: 1200px) {
    .add-contact-info {
      margin-top: 40px;
    }

    .add-contact-info__location {
      margin-bottom: 24px;
    }

    .add-contact-info__phone {
      margin-bottom: 40px;
    }
  }
`;
