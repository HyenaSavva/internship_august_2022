import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import styled from "styled-components";

const CustomSearch = styled(TextField)(() => ({
	"&": {
		fontSize: "1.1rem",
		border: "1px solid black",
		borderRadius: "5px",
	},
	"& .MuiInputBase-root": {
		width: "533px",
		height: "48px",
		padding: "8px 8px 8px 0",
		justifyContent: "center",
		border: "1px solid #D0D5DD",
		borderRadius: "0px 12px 12px 0px",
	},
}));

const SearchBar = ({ placeholder }) => {
	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<CustomSearch
				placeholder="Search"
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<SearchIcon />
						</InputAdornment>
					),
				}}
			/>
		</Box>
	);
};

export default SearchBar;
