import css from "styled-jsx/css";
import { appTheme } from "themes/themes";

export default css`
  .add-description {
    border-bottom: 1px solid #e4e7ec;
    display: flex;
  }

  .add-description__title-subtitle {
    display: flex;
    flex-direction: column;
  }

  .add-description__description-textarea {
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
    .add-description {
      margin-top: 40px;
    }
  }
`;
