import { configureStore } from "@reduxjs/toolkit";

import favoriteSlice from "./favoriteSlice";
import gridViewSlice from "./gridViewSlice";
import profileDropdownSlice from "./profileDropdownSlice";
import filterSlice from "./filterSlice";
import searchSlice from "./searchSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    favorite: favoriteSlice.reducer,
    gridView: gridViewSlice.reducer,
    profileDropdown: profileDropdownSlice.reducer,
    filter: filterSlice.reducer,
    search: searchSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
