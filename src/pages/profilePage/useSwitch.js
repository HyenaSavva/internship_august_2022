import { useState } from "react";

const useSwitch = () => {
  const [isActive, setIsActive] = useState({
    profile: true,
    loginAndSecurity: false,
    notifications: false,
    messages: false,
  });

  const switchHandler = (event) => {
    if (!event.target.lastChild || !event.target.lastChild.nodeValue) {
      console.log("null value");
      return;
    } else if (event.target.lastChild.nodeValue) {
      switch (event.target.lastChild.nodeValue) {
        case "Profile":
          setIsActive({
            profile: true,
            loginAndSecurity: false,
            notifications: false,
            messages: false,
          });
          break;
        case "Login & security":
          setIsActive({
            profile: false,
            loginAndSecurity: true,
            notifications: false,
            messages: false,
          });
          break;
        case "Notifications":
          setIsActive({
            profile: false,
            loginAndSecurity: false,
            notifications: true,
            messages: false,
          });
          break;
        case "Messages":
          setIsActive({
            profile: false,
            loginAndSecurity: false,
            notifications: false,
            messages: true,
          });
          break;
        case "Logout":
          console.log("Logout");
          break;
        default:
          console.log("Switch Error");
      }
      return;
    }
  };

  return { switchHandler, isActive };
};

export default useSwitch;
