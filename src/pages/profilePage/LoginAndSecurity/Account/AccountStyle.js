import css from "styled-jsx/css";

export default css`
  .logDevice {
    color: #dd1018;
    font-weight: 600;
    cursor: pointer;
    user-select: none;
  }

  .info {
    user-select: none;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .info p {
    margin-top: 8px;
    font-size: 14px;
    color: #667085;
  }

  .device {
    margin: 20px;
  }

  .summary {
    width: 120%;
    height: 90px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #d0d5dd;
  }
`;
