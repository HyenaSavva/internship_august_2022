import React, { useEffect, useState } from "react";

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

const entries = [
  { value: "all", label: "All" },
  { value: "price1", label: "0-10.000" },
  { value: "price2", label: "10.000-50.000" },
  { value: "price3", label: "50.000 - 100.000" },
  { value: "price4", label: "100.000 - 300.000" },
  { value: "price5", label: "300.000 - 700.000" },
  { value: "price6", label: "700.000 - 1.000.000" },
];

export default function FilterByPrice({ filterPrice }) {
  const [selectedPrice, setSelectedPrice] = useState("all");

  const handlePrice = (event) => {
    setSelectedPrice(event.target.value);
  };

  useEffect(() => {
    filterPrice(selectedPrice);
  }, [selectedPrice]);

  return (
    <div>
      <FormControl sx={{ m: 0, width: 150, mt: 0 }}>
        <InputLabel shrink={false}>
          <strong>Price</strong>
        </InputLabel>
        <Select
          sx={filterBy}
          style={{ width: "120px" }}
          displayEmpty
          value={""}
          input={<OutlinedInput />}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <RadioGroup onChange={handlePrice}>
            {entries.map((entry, index) => (
              <MenuItem key={index} value={entry}>
                <FormControlLabel
                  value={entry.value}
                  control={<Radio checked={selectedPrice === entry.value} />}
                  label={entry.label}
                />
              </MenuItem>
            ))}
          </RadioGroup>
        </Select>
      </FormControl>
    </div>
  );
}
