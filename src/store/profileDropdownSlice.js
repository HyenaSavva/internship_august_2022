import { createSlice } from "@reduxjs/toolkit";

const profileDropdownSlice = createSlice({
  name: "profileDropdown",
  initialState: { isOpen: false },
  reducers: {
    toggleDropdown(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const profileDropdownActions = profileDropdownSlice.actions;

export default profileDropdownSlice;
