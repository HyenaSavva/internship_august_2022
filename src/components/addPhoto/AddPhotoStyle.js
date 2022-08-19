import css from "styled-jsx/css";

export default css`
  .add-photo {
    border-radius: 12px;
    object-fit: cover;
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
    .add-photo {
      width: 164px;
      height: 128px;
    }
  }
`;
