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
  { value: "order1", label: "Most popular" },
  { value: "order2", label: "Price: Low to High" },
  { value: "order3", label: "Price: High to Low" },
  { value: "order4", label: "Featured" },
];

export default function OrderBy({ orderBy }) {
  const [selectedOrder, setSelectedOrder] = useState("order1");
  const [selectedLabel, setSelectedLabel] = useState("Most popular");

  const handleOrder = (event) => {
    setSelectedOrder(event.target.value);
    setSelectedLabel(
      entries.find((entry) => entry.value === event.target.value).label
    );
  };

  useEffect(() => {
    orderBy(selectedOrder);
  }, [selectedOrder]);

  return (
    <div>
      <FormControl sx={{ m: 0, width: 150, mt: 0 }}>
        <InputLabel shrink={false}>
          <strong>{selectedLabel}</strong>
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
          <RadioGroup onChange={handleOrder}>
            {entries.map((entry, index) => (
              <MenuItem key={index} value={entry}>
                <FormControlLabel
                  value={entry.value}
                  control={<Radio checked={selectedOrder === entry.value} />}
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
