import css from "styled-jsx/css";

export default css`
  .location {
    border-bottom: 1px solid #e4e7ec;
  }

  /* small */
  @media screen and (max-width: 480px) {
  }

  /* medium */

  @media (min-width: 481px) and (max-width: 1024px) {
  }

  /* large */
  @media (min-width: 1025px) {
    .location {
      width: 750px;
    }

    .location__image {
      width: 713px;
      height: 382px;
      margin-bottom: 32px;
    }
  }
`;

export const locationTitle = {
  fontWeight: "700",
  marginBottom: { lg: "4px" },
};

export const locationSubtitle = {
  marginBottom: { lg: "12px" },
};
