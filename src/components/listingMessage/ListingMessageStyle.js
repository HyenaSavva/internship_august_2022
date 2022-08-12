import css from "styled-jsx/css";

export default css`
  .listing-message {
    display: flex;
    flex-direction: column;
  }

  /* small */
  @media screen and (max-width: 480px) {
  }

  /* medium */

  @media (min-width: 481px) and (max-width: 1024px) {
  }

  /* large */
  @media (min-width: 1025px) {
    .listing-message {
      margin-top: 32px;
      width: 750px;
    }
  }
`;

export const messageTitle = {
  fontWeight: "700",
  marginBottom: { lg: "12px" },
};

export const textareaStyle = {
  width: "750px",
  color: "#D0D5DD",
};

export const textareaErrorStyle = {
  borderColor: "#DD1018",
};

export const sendBtn = {
  width: { lg: "165px" },
  height: { lg: "44px" },
  fontSize: "14px",
  lineHeight: "22px",
  "&:hover": {
    backgroundColor: "#fff",
  },
  marginTop: { lg: "12px" },
  marginBottom: { lg: "68px" },
  marginLeft: { lg: "78%" },
};
