import css from "styled-jsx/css";

export const noBorder = {
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
};

export const filterBy = {
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
};

export const hoverIcon = {
  "&:hover": {
    color: "#0356e8",
  },
};

export default css`
  .flex {
    display: flex;
  }
  .tabs {
    align-items: center;
    justify-content: space-between;
  }
  .tabs--left {
    display: flex;
    align-items: center;
  }
  .tabs--right {
    justify-content: space-between;
    align-items: center;
  }
  .grid-buttons {
    margin-left: 40px;
  }

  .tabs--user {
    gap: 28px;
    color: #98a2b3;
    margin-bottom: 10px;
    border-bottom: 1px solid #e4e7ec;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    align-items: center;
    text-align: center;
    width: 1140px;
    height: 48px;
    left: 390px;
    top: 196px;
  }
  .tab-active {
    color: #0241ae;
    cursor: pointer;
    border-bottom: 2px solid #0241ae;
    padding-top: 12px;
    padding-bottom: 10px;
  }
  .tab:hover {
    color: #0241ae;
    cursor: pointer;
    border-bottom: 2px solid #0241ae;
    padding-top: 12px;
    padding-bottom: 10px;
  }
`;
