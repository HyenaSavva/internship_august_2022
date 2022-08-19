import { useState } from "react";

const useCloseAll = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const switchHandler = (event) => {
    console.log(event)
    if (!event.target.lastChild || !event.target.lastChild.nodeValue) {
      console.log("null value");
      return;
    } else if (event.target.lastChild.nodeValue) {
      switch (event.target.lastChild.nodeValue) {
        case "Profile":
          setIsDisabled({
            profile: true,
            loginAndSecurity: false,
            notifications: false,
            messages: false,
          });
          break;
        case "Login & security":
          setIsDisabled({
            profile: false,
            loginAndSecurity: true,
            notifications: false,
            messages: false,
          });
          break;
        case "Notifications":
          setIsDisabled({
            profile: false,
            loginAndSecurity: false,
            notifications: true,
            messages: false,
          });
          break;
        case "Messages":
          setIsDisabled({
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

  return { switchHandler, isDisabled };
};

export default useCloseAll;
