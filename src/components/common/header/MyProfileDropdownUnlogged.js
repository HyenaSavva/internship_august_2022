import React from "react";

import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MessageIcon from "@mui/icons-material/Message";
import SecurityIcon from "@mui/icons-material/Security";
import LogoutIcon from "@mui/icons-material/Logout";

import HeaderStyles from "./HeaderStyles";
import { Link } from "react-router-dom";

const MyProfileDropdownUnlogged = () => {
  return (
    <>
      <div className="dd_menu dd_menu_unlogged_height">
        <div className="dd_left">
          <ul>
            <li className="li-title" style={{ cursor: "default" }}>
              <p>Hello!</p>
            </li>
            <li>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <div className="li-dropdown">
                  <PersonIcon sx={{ color: "#0356e8" }} />
                  <div className="li-text">Sign in</div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className="li-dropdown">
                  <NotificationsNoneIcon sx={{ color: "#0356e8" }} />
                  <div className="li-text">Notifications</div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className="li-dropdown">
                  <MessageIcon sx={{ color: "#0356e8" }} />
                  <div className="li-text">Messages</div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className="li-dropdown">
                  <SecurityIcon sx={{ color: "#0356e8" }} />
                  <div className="li-text">{"Login & security"}</div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{HeaderStyles}</style>
    </>
  );
};

export default MyProfileDropdownUnlogged;
