import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Dropdown({ sx, items }) {
	return (
		<div>
			<FormControl sx={{ m: 1, minWidth: 120 }}>
				<Select sx={sx} displayEmpty inputProps={{ "aria-label": "Without label" }}>
					{items.map((item, index) => {
						return (
							<MenuItem key={index}>
								{item.icon}
								{item.label}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</div>
	);
}
