import React from "react";
import { useDispatch } from "react-redux";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";

import TabsRowStyles from "./TabsRowStyles";

import { gridViewActions } from "store/gridViewSlice";
import FilterByLocation from "../filter/FilterByLocation";
import FilterByPrice from "../filter/FilterByPrice";
import OrderBy from "../filter/OrderBy";

const TabsRow = ({ filterLocation, filterPrice, orderBy }) => {
  const dispatch = useDispatch();

  const toggleGridView = () => {
    dispatch(gridViewActions.toggleGridView());
  };
  const toggleRowView = () => {
    dispatch(gridViewActions.toggleRowView());
  };

  return (
    <div className="flex tabs">
      <div className="tabs--left">
        <p style={{ width: "70px" }}>Filter by:</p>
        <FilterByLocation filterLocation={filterLocation} />
        <FilterByPrice filterPrice={filterPrice} />
      </div>
      <div className="tabs--right flex">
        <p style={{ width: "80px" }}>Order by:</p>
        <OrderBy orderBy={orderBy} />
        <div className="grid-buttons">
          <Stack direction="row" spacing={1}>
            <IconButton onClick={toggleGridView} aria-label="gridView">
              <GridViewIcon />
            </IconButton>
            <IconButton onClick={toggleRowView} aria-label="rowView">
              <TableRowsIcon />
            </IconButton>
          </Stack>
        </div>
      </div>
      <style jsx>{TabsRowStyles}</style>
    </div>
  );
};

export default TabsRow;
