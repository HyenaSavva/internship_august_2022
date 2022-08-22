import axios from "axios";

export const fetchListingsData = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_URL}Listing`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.error(`Error: ${error}`));
};
