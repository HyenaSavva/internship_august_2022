import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import SearchBarStyles from "./SearchBarStyles";
import { customSearch } from "./SearchBarStyles";

import { useDispatch } from "react-redux";
import { searchActions } from "store/searchSlice";
import { fetchListingsData } from "services/listingsFetch";

const SearchBar = ({ placeholder }) => {
  const [listings, setListings] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // fetchListingsData returns a promise - we use ".then" to get the data from the promise
    fetchListingsData().then((data) => {
      setListings(data);
    });
  }, []);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const keys = ["title", "location", "description"];

  const search = () => {
    dispatch(
      searchActions.search({
        data: listings,
        keys,
        query,
      })
    );
  };
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <TextField
        placeholder="Search"
        value={query}
        onKeyUp={(e) => {
          if (e.code === "Enter") {
            search();
            navigate("/search-page");
          }
        }}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={customSearch}
      />
      <style jsx>{SearchBarStyles}</style>
    </Box>
  );
};

export default SearchBar;
