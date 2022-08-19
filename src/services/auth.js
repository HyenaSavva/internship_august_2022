import axios from "axios";

export const createUser = async (email, password) => {
  return await axios
    .post(
      "https://assist-august-2022-be1.azurewebsites.net/api/user/register",
      { email, password }
    )
    .then((data) => data)
    .catch((error) => error);
};

export const loginUser = async (email, password) => {
  return await axios
    .post(
      "https://assist-august-2022-be1.azurewebsites.net/api/user/authenticate",
      {
        email,
        password,
      }
    )
    .then((data) => data)
    .catch((error) => error);
};

export const resetPassword = async (email) => {
  return await axios
    .post(
      "https://assist-august-2022-be1.azurewebsites.net/api/user/reset-password",
      { email }
    )
    .then((data) => data)
    .catch((error) => error);
};
