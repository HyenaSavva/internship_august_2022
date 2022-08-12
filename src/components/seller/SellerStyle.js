import css from "styled-jsx/css";

export default css`
  .seller {
    display: flex;
    justify-content: space-evenly;
    border-radius: 8px;
    border: solid 1px #e5e5e5;
    width: 360px;
    height: 142px;
  }

  .seller__infos {
    display: flex;
    flex-direction: column;
    margin-top: 28px;
  }

  /* small */
  @media screen and (max-width: 480px) {
  }

  /* medium */

  @media (min-width: 481px) and (max-width: 1024px) {
  }

  /* large */
  @media (min-width: 1025px) {
  }
`;

export const sellerName = {
  color: "#1c1c1e",
  fontSize: "16px",
  lineHeight: "24px",
  fontWeight: "600",
};

export const sellerAvatar = {
  marginTop: "28px",
};
