import css from "styled-jsx/css";

export const noBorder = {
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
};

export default css.global`
  * {
    box-sizing: border-box;
  }
  .header--left {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
  }
  .header--searchbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px;
  }
  .header--right {
    display: flex;
    align-items: center;
    color: #4d5464;
    gap: 30px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    margin-right: auto;
  }
  .header--icon {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .navbar {
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 92px;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    z-index: 100;
    padding: 0px;
    gap: 30px;
    left: 0px;
    border-bottom: 1px solid #d0d5dd;
    background: #fff;
  }
`;
