import React from "react";

import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { filterBy } from "../tabs/TabsRowStyles";
import { InputLabel } from "@mui/material";

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

const prices = [
	<FormControlLabel value="all" control={<Radio />} label="Most popular" />,
	<FormControlLabel
		value="price1"
		control={<Radio />}
		label="Price: Low to High"
	/>,
	<FormControlLabel
		value="price2"
		control={<Radio />}
		label="Price: High to Low"
	/>,
	<FormControlLabel value="price3" control={<Radio />} label="Featured" />,
];

export default function OrderBy() {
	return (
		<div>
			<FormControl sx={{ m: 0, width: 150, mt: 0 }}>
				<InputLabel shrink={false}>
					<strong>Most popular</strong>
				</InputLabel>
				<Select
					defaultValue=""
					sx={filterBy}
					displayEmpty
					value=""
					input={<OutlinedInput />}
					MenuProps={MenuProps}
					inputProps={{ "aria-label": "Without label" }}
				>
					<RadioGroup>
						{prices.map((price, index) => (
							<MenuItem key={index} value={price}>
								{price}
							</MenuItem>
						))}
					</RadioGroup>
				</Select>
			</FormControl>
		</div>
	);
}
