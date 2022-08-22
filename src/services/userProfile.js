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

  return {
    response,
  };
};
