import css from "styled-jsx/css";

export default css`
  .photo-galery {
    position: relative;
  }

  /* small */
  @media screen and (max-width: 480px) {
  }

  /* medium */

  @media (min-width: 481px) and (max-width: 1024px) {
  }

  /* large */
  @media (min-width: 1025px) {
    .photo-galery {
      margin-top: 68px;
    }
  }
`;

export const showBtn = {
  position: "absolute",
  backgroundColor: "#fff",
  width: "auto",
  height: "36px",
  top: { xs: "2%", xl: "88%" },
  right: { xs: "2%", xl: "2%" },
  border: "solid 1px #1976d2",
  "&:hover": {
    backgroundColor: "#fff",
  },
};

export const imageListStyles = {
  width: "100%",
  borderRadius: "12px",
  margin: "auto",
  position: "relative",
  height: "48%",
};
