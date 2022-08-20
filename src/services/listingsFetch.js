import axios from "axios";
import jwt from "jwt-decode";

export const fetchListingsData = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_URL}Listing`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.error(`Error: ${error}`));
};

export const fetchUser = async () => {
  let config = {
    headers: {
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjhiMWM4MjM0LTBlOGYtNGMyNi1iYjY3LTA4ZGE4MTIwZmYyZCIsIkVtYWlsIjoic3RyaW5nIiwiUm9sZSI6IkFkbWluIiwibmJmIjoxNjYwOTEzNzU2LCJleHAiOjE2NjE1MTg1NTYsImlhdCI6MTY2MDkxMzc1Nn0.ZErDCjjov3FC5kLheHlszDZzHJf49ATgyBZCYAzP1qk",
    },
  };
  const user = jwt(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjhiMWM4MjM0LTBlOGYtNGMyNi1iYjY3LTA4ZGE4MTIwZmYyZCIsIkVtYWlsIjoic3RyaW5nIiwiUm9sZSI6IkFkbWluIiwibmJmIjoxNjYwOTEzNzU2LCJleHAiOjE2NjE1MTg1NTYsImlhdCI6MTY2MDkxMzc1Nn0.ZErDCjjov3FC5kLheHlszDZzHJf49ATgyBZCYAzP1qk"
  );
  return await axios
    .get(
      `https://assist-august-2022-be1.azurewebsites.net/api/user/${user.Id}`,
      config
    )
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.error(`Error: ${error}`));
};

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjhiMWM4MjM0LTBlOGYtNGMyNi1iYjY3LTA4ZGE4MTIwZmYyZCIsIkVtYWlsIjoic3RyaW5nIiwiUm9sZSI6IkFkbWluIiwibmJmIjoxNjYwOTEzNzU2LCJleHAiOjE2NjE1MTg1NTYsImlhdCI6MTY2MDkxMzc1Nn0.ZErDCjjov3FC5kLheHlszDZzHJf49ATgyBZCYAzP1qk
