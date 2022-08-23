import React from "react";

import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MessageIcon from "@mui/icons-material/Message";
import SecurityIcon from "@mui/icons-material/Security";
import LogoutIcon from "@mui/icons-material/Logout";

import HeaderStyles from "./HeaderStyles";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MyProfileDropdown = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const logout = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="dd_menu dd_menu_logged_height">
        <div className="dd_left">
          <ul>
            <li className="li-title" style={{ cursor: "default" }}>
              <p>Hello!</p>
            </li>
            <li>
              <Link
                to={isLoggedIn ? "/" : "/login"}
                style={{ textDecoration: "none" }}
              >
                <div className="li-dropdown">
                  <PersonIcon sx={{ color: "#0356e8" }} />
                  <div className="li-text">Profile</div>
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
            {isLoggedIn && (
              <>
                <hr />
                <li>
                  <div className="li-dropdown" onClick={logout}>
                    <LogoutIcon sx={{ color: "#596274" }} />
                    <div className="li-text">Logout</div>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <style jsx>{HeaderStyles}</style>
    </>
  );
};

export default MyProfileDropdown;
