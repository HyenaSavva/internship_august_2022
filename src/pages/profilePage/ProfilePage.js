import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SecurityIcon from "@mui/icons-material/Security";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Avatar from "@mui/material/Avatar";

import Header from "components/common/header/Header";
import ProfilePageStyle, { EditIcon, AvatarIcon } from "./ProfilePageStyle";
import ProfileOptions from "./ProfileOptions/ProfileOptions";
import useSwitch from "./useSwitch";
import LoginAndSecurity from "./LoginAndSecurity/LoginAndSecurity";

import { useState } from "react";

// const user = {};
const Profile = () => {
  const { switchHandler, isActive } = useSwitch();
  const [imagePath, setImagePath] = useState();
  let url;

  return (
    <div className="page">
      <div className="navigate">
        <Header />
      </div>
      <main>
        <section className="sideMenu">
          <div className="sideContainer">
            <div className="avatar">
              <div className="editButton">
                <label htmlFor="file"></label>
                <input
                  id="file"
                  type={"file"}
                  onLoad={(e) => {
                    URL.revokeObjectURL(e.target.files[0]);
                  }}
                  onChange={(e) => {
                    url = URL.createObjectURL(e.target.files[0]);
                    setImagePath(url.slice(5, url.length));
                    console.log(url.slice(5, url.length));
                  }}
                />
                <EditOutlinedIcon sx={EditIcon} />
              </div>
              <Avatar src={imagePath} sx={AvatarIcon} />
            </div>

            <ul className="sideButtons" onClick={switchHandler}>
              <li className={isActive.profile ? "active" : ""}>
                <div className="icon">
                  <PersonOutlineIcon />
                </div>
                Profile
              </li>
              <li className={isActive.loginAndSecurity ? "active" : ""}>
                <div className="icon">
                  <SecurityIcon />
                </div>
                Login & security
              </li>
              <li className={isActive.notifications ? "active" : ""}>
                <div className="icon">
                  <NotificationsNoneIcon />
                </div>
                Notifications
              </li>
              <li className={isActive.messages ? "active" : ""}>
                <div className="icon">
                  <MessageOutlinedIcon />
                </div>
                Messages
              </li>
              <li>
                <div className="icon">
                  <LogoutOutlinedIcon />
                </div>
                Logout
              </li>
            </ul>
          </div>
        </section>

        <section className="settingsMenu">
          <div className="settings">
            {isActive.profile ? <ProfileOptions /> : <></>}
            {isActive.loginAndSecurity ? <LoginAndSecurity /> : <></>}
            {isActive.notifications ? <p>Notifications</p> : <></>}
            {isActive.messages ? <p>Messages</p> : <></>}
          </div>
        </section>
      </main>
      <style jsx>{ProfilePageStyle}</style>
    </div>
  );
};
export default Profile;
