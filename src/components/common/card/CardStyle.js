import css from "styled-jsx/css";

export const shareBtn = {
  width: 92,
  color: "primary",
  fontSize: "14px",
  fontWeight: "600",

  "&:hover": {
    backgroundColor: "#fff",
  },
};

export default css`
  .container {
    position: relative;
  }
  .container img {
    display: block;
  }
  .title {
    width: 238.5px;
    height: 24px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    color: #1c1c1e;
  }
  .location {
    width: 238.5px;
    height: 20px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #667085;
  }
  .price {
    width: 238.5px;
    height: 22px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    color: #1c1c1e;
  }
  .red {
    background-color: red;
  }
  .empty--card {
    align-items: center;
    text-align: center;
  }

  .content-wrapper-grid {
    position: relative;
  }
  .content-wrapper-row {
    position: relative;
    width: 1168px;
  }
  .fav-btn {
    position: relative;
    top: -36px;
    right: 60px;
  }
  .title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .location-fav {
    align-items: center;
    margin-left: 30px;
  }
`;
