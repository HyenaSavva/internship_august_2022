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

export const favBtn = {
  background: "rgba(28, 28, 30, 0.2)",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "rgba(28, 28, 30, 0.6)",
  },
};

export const activeBtn = {
	color: "#EF2028",
};

export default css`
  .container {
    position: relative;
  }
  .container img {
    display: block;
  }
  .circle-fav {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 28px;
    height: 28px;
    top: 12px;
    left: 222.5px;
  }
  .circle-fav:hover {
    background: "rgba(28, 28, 30, 0.6)";
  }
  .btn {
    background: none;
    border: none;
    color: white;
    padding: 12px 16px;
    font-size: 16px;
    cursor: pointer;
  }
`;
