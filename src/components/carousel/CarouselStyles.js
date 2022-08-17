import css from "styled-jsx/css";

export const customArrowRight = {
  background: "#fff",
  border: "1px solid #0356E8",
  color: "#0356E8",
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  marginLeft: "-40px",
  ".MuiSvgIcon-root": {},
};
export const customArrowLeft = {
  background: "#fff",
  border: "1px solid #0356E8",
  color: "#0356E8",
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  marginRight: "0px",
  zIndex: "200",
  ".MuiSvgIcon-root": {},
};

export default css`
  .card--link {
    text-decoration: none;
  }
  .carousel-category {
    margin-bottom: 46px;
  }
`;
