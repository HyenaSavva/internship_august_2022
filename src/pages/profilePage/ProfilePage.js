import Header from "components/common/header/Header";
import ProfilePageStyle from "./ProfilePageStyle";
import ProfileOptions from "./ProfileOptions/ProfileOptions";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SecurityIcon from "@mui/icons-material/Security";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

// const user = {};

const Profile = () => {
  const handler = (event) => {
    if (!event.target.lastChild || !event.target.lastChild.nodeValue) {
      console.log("null value");
      return;
    }
    if (event.target.lastChild.nodeValue) {
      switch (event.target.lastChild.nodeValue) {
        case "Profile":
          console.log("true");
          break;
        case "Login & security":
          console.log("true");
          break;
        case "Notifications":
          console.log("true");
          break;
        case "Messages":
          console.log("true");
          break;
        case "Logout":
          console.log("true");
          break;
        default:
          console.log("false");
      }
      return;
    }
  };

  return (
    <div className="page">
      <div className="navigate">
        <Header />
      </div>
      <main>
        <section className="sideMenu">
          <div className="sideContainer">
            <div className="avatar"></div>
            <ul className="sideButtons" onClick={handler}>
              <li>
                <div className="icon">
                  <PersonOutlineIcon />
                </div>
                Profile
              </li>
              <li>
                <div className="icon">
                  <SecurityIcon />
                </div>
                Login & security
              </li>
              <li>
                <div className="icon">
                  <NotificationsNoneIcon />
                </div>
                Notifications
              </li>
              <li>
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
        <section className="profileMenu">
          <div className="profileContainer">
            <p>Profile</p>
            <ProfileOptions />
          </div>
        </section>
      </main>
      <style jsx>{ProfilePageStyle}</style>
    </div>
  );
};
export default Profile;
