import css from "styled-jsx/css";
import img from "../../assets/Frame3.png";

export default css`
  .Img {
    width: 100px;
    height: 30px;
    margin-bottom: 42px;
  }
  .H1 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #1c1c1e;
    margin: 0 0 4px 0;
  }

  .P {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    color: #98a2b3;
    margin: 0;
  }

  .Por {
    color: #6c6c6c;
    font-weight: 600;
    margin: 0 8px;
    font-size: 12px;
  }

  .Line {
    border-top: 1px solid #d0d0d0;
    display: flex;
    flex-grow: 1;
  }

  .orBlock {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 16px 0;
  }

  .Log {
    width: 22vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .LogBlock {
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .Main {
    width: 100vw;
    height: 100vh;
    display: flex;
    font-family: "Inter", sans-serif;
  }

  .ImageBlock {
    width: 50vw;
    height: 100vh;

    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
  }

  .switch {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .login { 
    cursor: pointer;
    color: #0356E8;
  }
`;
