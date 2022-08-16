import React from "react";
import { useDispatch } from "react-redux";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";

import TabsRowStyles from "./TabsRowStyles";
import { gridViewActions } from "store/gridViewSlice";
import FilterBy from "../filter/FilterBy";

const TabsRow = () => {
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
				<p style={{ width: "" }}>Filter by:</p>
				<FilterBy />
				<FilterBy />
			</div>
			<div className="tabs--right flex">
				<p style={{ width: "" }}>Order by:</p>
				<FilterBy />
				<Stack direction="row" spacing={1}>
					<IconButton onClick={toggleGridView} aria-label="gridView">
						<GridViewIcon />
					</IconButton>
					<IconButton onClick={toggleRowView} aria-label="rowView">
						<TableRowsIcon />
					</IconButton>
				</Stack>
			</div>
			<style jsx>{TabsRowStyles}</style>
		</div>
	);
};

export default TabsRow;
