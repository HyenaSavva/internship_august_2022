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
