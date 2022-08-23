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
  .flex {
    display: flex;
  }
  .categ-everything {
    justify-content: space-between;
    align-items: center;
  }
  .categ-title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    color: #333843;
  }
  .btn-everything {
    gap: 8px;
    padding: 5px 9px;
    margin: 10px 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    color: #0241ae;
  }
  .btn-everything:hover {
    cursor: pointer;
  }
  .arrow-icon {
    width: 12.98px;
    height: 12.98px;
  }
`;
