import css from "styled-jsx/css";

export const noBorder = {
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
};

export const selectCategories = {
  "&": {
    margin: "0px",
    width: "178px",
    height: "48px",
    padding: "8px",
    border: "1px solid #D0D5DD",
    justifyContent: "center",
    borderRadius: "12px 0px 0px 12px",
  },
  "& .MuiFormControl-root": {
    margin: "0",
  },
};

export const selectProfile = {
  "&": {
    margin: "0px",
    width: "178px",
    height: "48px",
    padding: "8px",
    justifyContent: "center",
  },
  "& .MuiFormControl-root": {
    margin: "0",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
};

export default css.global`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .navbar {
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 92px;
    padding: 0px;
    gap: 30px;
    left: 0px;
    top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    z-index: 100;
    border-bottom: 1px solid #d0d5dd;
    background: #fff;
  }
  .header--left {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
  }
  .header--searchbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px;
  }
  .header--right {
    display: flex;
    align-items: center;
    color: #4d5464;
    gap: 30px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    margin-right: auto;
  }
  .header--icon {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: black;
  }
  .header--icon:hover {
    color: #0356e8;
  }

  @media (max-width: 1200px) {
    .navbar {
      width: 100%;
    }
  }

  .navbar .dd_menu {
    position: fixed;
    display: flex;
    background: #fff;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    width: 100%;
    max-width: 252px;
  }

  .dd_menu_logged_height {
    height: 264px;
  }
  .dd_menu_unlogged_height {
    height: 220px;
  }

  .navbar .dd_menu .dd_left {
    width: 100%;
    background: #fff;
    padding: 15px 20px;
    border-radius: 15px;
  }

  .navbar .dd_menu .dd_right li {
    margin-bottom: 10px;
    color: #596274;
  }
  .navbar .dd_menu .dd_left li {
    margin-bottom: 1px;
  }

  .navbar li {
    cursor: pointer;
  }

  .flex {
    display: flex;
  }

  .profile {
    position: relative;
  }
  .profile-name {
    align-items: center;
  }
  .profile-icon {
    align-items: center;
  }
  .profile-icon:hover {
    color: #0356e8;
  }

  .dropdown-profile {
    position: absolute;
    top: 150%;
    left: -70px;
  }
  .li-text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
  }
  .li-title {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 40px;
  }
  .li-dropdown {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    height: 40px;
    color: #596274;
  }
  .li-dropdown:hover {
    color: #0356e8;
  }
  .border-top {
    border-top: 1px solid grey;
  }

  /* mobile */
  /* @media screen and (max-width: 639px) {
  } */

  /* tablet */
  /* @media (min-width: 640px) and (max-width: 1023px) {
  } */

  /* laptop */
  /* @media (min-width: 1024px) and (max-width: 1199px) {
  } */

  /* desktop */
  /* @media (min-width: 1200px) {
  } */
`;
