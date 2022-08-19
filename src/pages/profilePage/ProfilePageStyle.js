import css from "styled-jsx/css";

export const EditIcon = {
  width: "16px",
  height: "16px",
  borderRadius: "32px",
};

export const AvatarIcon = {
  width: "112px",
  height: "112px",
};

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
    position: relative;
  }

  .editButton {
    background-color: #ffffff;
    transition: background-color 0.3s;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.16);
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 32px;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  .editButton:hover {
    background-color: #eaeaea;
  }

  .editButton label {
    width: 32px;
    height: 32px;
    position: absolute;
    cursor: pointer;
    z-index: 3;
  }

  .editButton input {
    display: none;
  }

  .sideButtons {
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none;
    color: #596274;
  }

  .sideButtons li {
    margin: 26px 0;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
  }

  .sideButtons .active {
    color: #0356e8;
    user-select: none;
  }

  .sideButtons .icon {
    margin: 0 12px 0 4px;
    display: flex;
  }

  // Profile Settings

  .settingsMenu {
    width: 65vw;Button
    height: 100%;
    margin: 32px 0 0 128px;
  }

  .settings {
    width: 652px;
    height: 50%;
  }

  .settings p {
    margin: 0 0 12px 0;
    font-weight: 700;
    font-size: 24px;
    color: #1c1c1e;
  }
`;
