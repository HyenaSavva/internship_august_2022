import axios from "axios";
import jwt from "jwt-decode";

let user = {};
if (localStorage.getItem("token")) {
  user = jwt(`${localStorage.getItem("token")}`);
} else {
  user = {
    id: "",
  };
}

export const fetchListingsData = async () => {
  return await axios
    .get(`${process.env.REACT_APP_LISTING_API_URL}listing`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.error(`Error: ${error}`));
};
export const fetchMyListingsData = async () => {
  return await axios
    .get(`${process.env.REACT_APP_MY_LISTINGS_API_URL}${user.Id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.error(`Error: ${error}`));
};

export const deleteListing = async (listingId) => {
  return await axios
    .delete(`${process.env.REACT_APP_LISTING_API_URL}${listingId}`)
    .then((response) => {})
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
      `${process.env.REACT_APP_FAVORITE_API_URL}${user.Id}?listingId=${listingId}`
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.error(`Error: ${error}`));
};

export const removeFromFavorites = async (listingId) => {
  return await axios
    .delete(
      `${process.env.REACT_APP_FAVORITE_API_URL}delete?userId=${user.Id}&listingId=${listingId}`
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.error(`Error: ${error}`));
};

export const fetchUser = async () => {
  let config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  return await axios
    .get(`${process.env.REACT_APP_USER_API_URL}${user.Id}`, config)
    .then((response) => {
      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("userId", JSON.stringify(user));
      return response.data;
    })
    .catch((error) => console.error(`Error: ${error}`));
};
