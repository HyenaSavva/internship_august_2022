import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import SearchBarStyles from "./SearchBarStyles";
import { customSearch } from "./SearchBarStyles";

const SearchBar = ({ placeholder }) => {
	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<TextField
				placeholder="Search"
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
