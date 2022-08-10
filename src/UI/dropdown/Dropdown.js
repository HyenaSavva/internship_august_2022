import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import styled from "@emotion/styled";

const CustomSelect = styled(Select)(() => ({
	"&": {
		width: "178px",
		height: "48px",
		padding: "8px",
		border: "1px solid #D0D5DD",
		justifyContent: "center",
		borderRadius: "12px 0px 0px 12px",
	},
	// "& .MuiInputBase-root": {
	// 	height: "30px",
	// 	border: "1px solid #D0D5DD",
	// 	padding: "8px 8px 8px 0px",
	// 	justifyContent: "center",
	// 	borderRadius: "12px 0px 0px 12px",
	// },
}));

export default function Dropdown() {
	const [age, setAge] = React.useState("");

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<div>
			<FormControl sx={{ m: 1, minWidth: 120 }}>
				<CustomSelect
					value={age}
					onChange={handleChange}
					displayEmpty
					inputProps={{ "aria-label": "Without label" }}
				>
					<MenuItem value="">Category</MenuItem>
					<MenuItem value={"Big Houses"}>Big Houses</MenuItem>
					<MenuItem value={"Small Houses"}>Small Houses</MenuItem>
					<MenuItem value={"Offices"}>Offices</MenuItem>
					<MenuItem value={"Apartments"}>Apartments</MenuItem>
				</CustomSelect>
			</FormControl>
		</div>
	);
}
