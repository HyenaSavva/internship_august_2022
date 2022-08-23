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
          break;
        default:
      }
      return;
    }
  };

  return { switchHandler, isActive };
};

export default useSwitch;
