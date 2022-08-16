import { configureStore } from "@reduxjs/toolkit";

import favoriteSlice from "./favoriteSlice";
import gridViewSlice from "./gridViewSlice";
import profileDropdownSlice from "./profileDropdownSlice";

const store = configureStore({
	reducer: {
		favorite: favoriteSlice.reducer,
		gridView: gridViewSlice.reducer,
		profileDropdown: profileDropdownSlice.reducer,
	},
});

export default store;
