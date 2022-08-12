import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PersonIcon from "@mui/icons-material/Person";

import { customSelect } from "./DropdownStyles";

export default function Dropdown({ sx, items }) {
	const [age, setAge] = React.useState("");

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<div>
			<FormControl sx={{ m: 1, minWidth: 120 }}>
				<Select
					sx={sx}
					value={age}
					onChange={handleChange}
					displayEmpty
					inputProps={{ "aria-label": "Without label" }}
				>
					{items.map((item, index) => {
						return (
							<MenuItem key={index}>
								{item.icon}
								{item.label}
							</MenuItem>
						);
						// console.log(item);
					})}
					{/* <MenuItem value="">Category</MenuItem>
					<MenuItem value={"Big Houses"}>Big Houses</MenuItem>
					<MenuItem value={"Small Houses"}>Small Houses</MenuItem>
					<MenuItem value={"Offices"}>Offices</MenuItem>
					<MenuItem value={"Apartments"}>Apartments</MenuItem> */}
				</Select>
			</FormControl>
		</div>
	);
}
