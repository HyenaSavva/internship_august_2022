import React from "react";
import { useDispatch, useSelector } from "react-redux";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";

import TabsRowStyles from "./TabsRowStyles";
import { hoverIcon } from "./TabsRowStyles";

import { gridViewActions } from "store/gridViewSlice";
import FilterByLocation from "../filter/FilterByLocation";
import FilterByPrice from "../filter/FilterByPrice";
import OrderBy from "../filter/OrderBy";

const TabsRow = ({ filterLocation, filterPrice, orderBy }) => {
  const isGridView = useSelector((state) => state.gridView.isGridView);
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user"));

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
        {user.Role !== "Admin" && (
          <div className="grid-buttons">
            <Stack direction="row" spacing={1}>
              <IconButton
                onClick={toggleGridView}
                aria-label="gridView"
                sx={hoverIcon}
              >
                <GridViewIcon sx={isGridView ? { color: "#0356e8" } : {}} />
              </IconButton>
              <IconButton
                onClick={toggleRowView}
                aria-label="rowView"
                sx={hoverIcon}
              >
                <TableRowsIcon sx={!isGridView ? { color: "#0356e8" } : {}} />
              </IconButton>
            </Stack>
          </div>
        )}
      </div>
      <style jsx>{TabsRowStyles}</style>
    </div>
  );
};

export default TabsRow;
