import { createSlice } from "@reduxjs/toolkit";
import CardsData from "../assets/data/dummy.json";

const filterSlice = createSlice({
  name: "filter",
  initialState: { listings: CardsData, favorites: [] },
  reducers: {
    toggle(state, action) {
      const favListingIndex = state.listings.findIndex(
        (listing) => listing.id === action.payload.id
      );
      const favListing = state.listings.find(
        (listing) => listing.id === action.payload.id
      );
      state.listings[favListingIndex] = {
        ...favListing,
        isFavorite: !favListing.isFavorite,
      };

      // Create array for favorites
      // action.payload - data coming from dispatch()
      const newListing = action.payload;
      const existingListing = state.favorites.find(
        (listing) => listing.id === newListing.id
      );
      if (!existingListing) {
        state.favorites.push({
          ...newListing,
          isFavorite: !newListing.isFavorite,
        });
      }
    },
  },
});

export const favoriteActions = filterSlice.actions;

export default filterSlice;
