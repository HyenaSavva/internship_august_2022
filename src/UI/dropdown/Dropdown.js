import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

export default function Dropdown({ sx, items }) {
  const navigate = useNavigate();

  const [item, setItem] = React.useState("");

  const handleNavigate = (value) => {
    navigate(`/category/${value}`);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          sx={sx}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          {items.map((item, index) => {
            return (
              <MenuItem
                key={item.value}
                onClick={() => handleNavigate(item.value)}
              >
                {item.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
