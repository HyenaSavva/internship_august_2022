import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { searchData: [], searchInput: "" },
  reducers: {
    search(state, action) {
      const resultData = action.payload.data.filter((card) =>
        action.payload.keys.some((key) =>
          card[key]?.toLowerCase().includes(action.payload.query.toLowerCase())
        )
      );
      state.searchInput = action.payload.query;
      state.searchData = [...resultData];
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
