import { createSlice } from "@reduxjs/toolkit";

const gridViewSlice = createSlice({
	name: "gridView",
	initialState: { isGridView: true },
	reducers: {
		toggleGridView(state) {
			state.isGridView = true;
		},
		toggleRowView(state) {
			state.isGridView = false;
		},
	},
});

export const gridViewActions = gridViewSlice.actions;

export default gridViewSlice;
