import css from "styled-jsx/css";

export default css`
  .title {
    margin: 0 0 12px 0;
    font-weight: 700;
    font-size: 24px;
    color: #1c1c1e;
  }

  #firstInput {
    width: 50%;
    margin-bottom: 10px;
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
