import css from "styled-jsx/css";

export default css`
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
