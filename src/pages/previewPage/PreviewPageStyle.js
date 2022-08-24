import css from "styled-jsx/css";

export default css.global`
  .preview-page {
    padding-top: 100px;
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  .preview-page__top-details {
    display: flex;
    justify-content: space-between;
  }

  .preview-page__title-price {
    display: flex;
    flex-direction: column;
  }

  .preview-page__middle-details {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .preview-page__description {
    word-wrap: break-word;
  }

  .preview-page__footer {
    position: sticky;
    top: 0;
    height: 136px;
  }

  /* mobile */
  @media screen and (max-width: 639px) {
    .preview-page {
      width: 100%;
    }

    .preview-page__top-details {
      margin: 24px 16px;
    }
  }

  /* tablet */

  @media (min-width: 640px) and (max-width: 1023px) {
    .preview-page {
      max-width: calc(100% - 170px);
    }

    .preview-page__top-details {
      margin: 24px 16px;
    }
  }

  /* laptop */

  @media (min-width: 1024px) and (max-width: 1199px) {
    .preview-page {
      max-width: calc(100% - 410px);
    }

    .preview-page__top-details {
      margin: 24px 16px;
    }
  }

  /* desktop */

  @media (min-width: 1200px) {
    .preview-page {
      max-width: calc(100% - 780px);
    }

    .preview-page__top-details {
      margin: 24px 16px;
    }

    .preview-page__middle-details {
      margin: 16px auto;
    }

    .preview-page__seller {
      margin-right: 0px;
    }

    .preview-page__location {
      margin-top: 40px;
    }
  }
`;
