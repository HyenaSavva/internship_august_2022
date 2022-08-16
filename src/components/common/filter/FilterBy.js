import React from "react";

import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const names = [
	"All",
	"0 - 10.000",
	"10.000 - 50.000",
	"50.000 - 100.000",
	"100.000 - 300.000",
	"300.000 - 700.000",
	"700.000 - 1.000.000",
];

function getStyles(name, personName, theme) {
	return {
		fontWeight:
			personName.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

export default function FilterBy() {
	const theme = useTheme();
	const [personName, setPersonName] = React.useState([]);

	const handleChange = (event) => {
		const {
			target: { value },
		} = event;
		setPersonName(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		);
	};

	return (
		<div>
			<FormControl sx={{ m: 1, width: 300, mt: 3 }}>
				<Select
					style={{ width: "120px" }}
					displayEmpty
					value={personName}
					onChange={handleChange}
					input={<OutlinedInput />}
					renderValue={(selected) => {
						if (selected.length === 0) {
							return <strong>Location</strong>;
						}

						return selected.join(", ");
					}}
					MenuProps={MenuProps}
					inputProps={{ "aria-label": "Without label" }}
				>
					{names.map((name) => (
						<MenuItem
							key={name}
							value={name}
							style={getStyles(name, personName, theme)}
						>
							{name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}
