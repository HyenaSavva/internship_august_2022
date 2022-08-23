import axios from "axios";
import jwtDecode from "jwt-decode";

export const getUserProfile = async () => {
  const token = localStorage.getItem("token");
  const decodedData = jwtDecode(token);

  const response = await axios
    .get(
      `https://assist-august-2022-be1.azurewebsites.net/api/user/${decodedData.Id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((data) => data)
    .catch((error) => error);
  console.log(response);

  return {
    response,
  };
};

export const putUserProfile = async ({ modifier }) => {
  const token = localStorage.getItem("token");
  const decodedData = jwtDecode(token);

  const response = await axios
    .put(
      `https://assist-august-2022-be1.azurewebsites.net/api/user/${decodedData.Id}`,
      { modifier },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((data) => data)
    .catch((error) => error);
  console.log(response);
  return {
    response,
  };
};

export const patchUserProfile = async (modifier) => {
  const token = localStorage.getItem("token");
  const decodedData = jwtDecode(token);

  const response = await axios
    .patch(
      `https://assist-august-2022-be1.azurewebsites.net/api/User/patch/${decodedData.Id}`,
      {...modifier},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((data) => data)
    .catch((error) => error);
  console.log(response);
  return {
    response,
  };
};
