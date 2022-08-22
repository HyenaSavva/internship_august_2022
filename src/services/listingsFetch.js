import axios from "axios";
import jwt from "jwt-decode";

export const fetchListingsData = async () => {
  return await axios
    .get(`${process.env.REACT_APP_LISTING_API_URL}listing`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.error(`Error: ${error}`));
};

export const singleListingData = async (listingID) => {
  return await axios
    .get(`${process.env.REACT_APP_LISTING_API_URL}${listingID}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.error(`Error: ${error}`));
};

export const fetchFavoritesData = async () => {
  const user = jwt(`${localStorage.getItem("token")}`);

  return await axios
    .get(`${process.env.REACT_APP_FAVORITE_API_URL}${user.Id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.error(`Error: ${error}`));
};

export const addToFavorites = async (listingId) => {
  return await axios
    .post(
      `https://assist-august-2022-be1.azurewebsites.net/Favorite/api/3a52e3b7-bee6-4521-fd0a-08da81f0659e?listingId=a75d80f0-4c32-4550-bf3e-08da84146fcc`
    )
    .then((response) => {})
    .catch((error) => console.error(`Error: ${error}`));
};

export const fetchUser = async () => {
  let config = {
    headers: {
      Authorization: "Bearer " + `${localStorage.getItem("token")}`,
    },
  };
  const user = jwt(`${localStorage.getItem("token")}`);

  return await axios
    .get(
      `https://assist-august-2022-be1.azurewebsites.net/api/user/${user.Id}`,
      config
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.error(`Error: ${error}`));
};
