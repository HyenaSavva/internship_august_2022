import css from "styled-jsx/css";

export default css`
  .title {
    margin: 0 0 12px 0;
    font-weight: 700;
    font-size: 24px;
    color: #1c1c1e;
  }

  .inputs {
    display: flex;
    width: 100%;
  }

  .inputs div {
    width: 100%;
    font-size: 12px;
  }

  .inputs #firstInput {
    margin-right: 30px;
  }
`;

export const childStyle = {
  ".inputs": {
    display: "flex",
    width: "100%",
  },
  ".inputs #firstInput": {
    marginRight: "30px",
  },
};

export const firstInput = {
  "#firstInput": {
    width: "50%",
  },
};
