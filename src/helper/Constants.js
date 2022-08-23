import axios from "axios";

export const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png",
];

export const typeImageValidation = (type) => {
  return SUPPORTED_FORMATS.includes(type);
};

export const sizeImageValidation = (size) => {
  if (size) {
    return size / 1000 > 60;
  }
};

export const addNewListing = async (body) => {
  return await axios.post(
    "https://assist-august-2022-be1.azurewebsites.net/Listing/api/create?userId=F3E1BD6C-0DAF-460C-12AD-08DA841522EA",
    body
  );
};

export const getListingById = async (id) => {
  console.log("id", id);
  return await axios.get(`${process.env.REACT_APP_API_URL}Listing/${id}`);
};
