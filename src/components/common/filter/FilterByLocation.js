import { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

import { filterBy } from "../tabs/TabsRowStyles";

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
  "Botosani",
  "Botoșani",
  "Timisoara",
  "Suceava",
  "Sydney",
  "Romania",
];

export default function FilterByLocation({ filterLocation }) {
  const [locationName, setLocationName] = useState([]);

  const handleChange = (event) => {
    setLocationName(event.target.value);
  };

  useEffect(() => {
    filterLocation(locationName);
  }, [locationName]);

  return (
    <div>
      <FormControl sx={{ m: 0, width: 150 }}>
        <Select
          sx={filterBy}
          style={{ width: "150px" }}
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          displayEmpty
          value={locationName}
          onChange={handleChange}
          InputLabelProps={{ shrink: false }}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <strong>Location</strong>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={locationName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
