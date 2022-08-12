import css from "styled-jsx/css";

export default css`
  .description {
    display: flex;
    flex-direction: column;
    border-top: 1px solid #e4e7ec;
    border-bottom: 1px solid #e4e7ec;
  }

  /* small */
  @media screen and (max-width: 480px) {
    .description {
      width: 100%;
    }
  }

  /* medium */

  @media (min-width: 481px) and (max-width: 1024px) {
  }

  /* large */
  @media (min-width: 1025px) {
    .description {
      width: 750px;
    }
  }
`;

export const propertyDescriptionTitle = {
  color: "#1C1C1E",
  fontSize: "16px",
  fontWeight: "700",
  marginTop: "32px",
  marginBottom: "12px",
};

export const propertyDescriptionParagraph = {
  color: "#667085",
  fontSize: "14px",
  lineHeight: "22px",
  marginBottom: "32px",
};
