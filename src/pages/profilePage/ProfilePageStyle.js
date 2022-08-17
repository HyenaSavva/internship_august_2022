import css from "styled-jsx/css";

export default css`
  .page {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .navigate {
    height: 92px;
  }

  main {
    display: flex;
    height: calc(100vh - 92px);
    position: relative;
    width: 100vw;
  }

  .container {
    width: 100%;
    height: 100%;
  }

  //Side Menu

  .sideMenu {
    width: 35vw;
    height: 100%;
    margin: 32px 0 0 0;
    display: flex;
    justify-content: flex-end;
  }

  .sideContainer {
    width: 165px;
    height: 376px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .avatar {
    min-height: 112px;
    width: 112px;
    background-color: #ebebeb;
  }

  .sideButtons {
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none;
    color: #596274;
  }

  .sideButtons li {
    padding: 13px 0;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
  }

  .sideButtons li:hover {
    cursor: pointer;
    color: #0356e8;
    user-select: none;
  }

  .sideButtons .icon {
    margin: 0 12px 0 4px;
  }

  // Profile Settings

  .profileMenu {
    width: 65vw;
    height: 100%;
    margin: 32px 0 0 128px;
  }

  .profileContainer {
    width: 652px;
    height: 50%;
  }

  .profileContainer p {
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
