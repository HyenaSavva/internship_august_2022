import { createSlice } from "@reduxjs/toolkit";
import CardsData from "../assets/data/dummy.json";

const favoriteSlice = createSlice({
	name: "favorite",
	initialState: { isFavorite: false, listings: CardsData, favorites: [] },
	reducers: {
		toggle(state, action) {
			// modific state-ul la toate cardurile
			// state.isFavorite = !state.isFavorite;

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

			console.log(state.listings[favListingIndex]);
			// creez array-ul pentru favorites
			// action.payload sunt datele care vin din dispatch()
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

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice;
