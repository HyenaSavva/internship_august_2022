import axios from "axios";
// import { Jwt } from "jsonwebtoken";

export const getUserProfile = async () => {
  const token = localStorage.getItem("token");

  return await axios
    .get("https://assist-august-2022-be1.azurewebsites.net/api/user/register", {
      token,
    })
    .then((data) => data)
    .catch((error) => error);
};
