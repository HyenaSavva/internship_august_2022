import css from "styled-jsx/css";
import img from "../../../assets/Frame3.png";

export default css`
  main {
    width: 100vw;
    height: 100vh;
    display: flex;
    font-family: "Inter", sans-serif;
  }

  .logBlock {
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .log {
    width: 22vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .log img {
    width: 100px;
    height: 30px;
    margin-bottom: 42px;
  }

  .log h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #1c1c1e;
    margin: 0 0 4px 0;
  }

  .log p {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #98a2b3;
    margin: 0 0 20px 0;
  }

  .googleBtn {
    margin: 8px 0 0 0;
  }

  .imageBlock {
    width: 50vw;
    height: 100vh;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
  }

  .log .switch {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 24px;
  }

  .login {
    cursor: pointer;
    color: #0356e8;
  }
`;
