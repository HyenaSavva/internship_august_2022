import css from "styled-jsx/css";

export default css`
  .inputs {
    display: flex;
    width: 100%;
  }

  .inputs div {
    width: 100%;
    font-size: 12px;
    margin-bottom: 10px;
  }

  .inputs #firstInput {
    margin-right: 30px;
  }
`;

export const firstInput = {
  ".inputs": {
    display: "flex",
    width: "100%",
  },
  ".inputs #firstInput": {
    marginRight: "30px",
  },
};
