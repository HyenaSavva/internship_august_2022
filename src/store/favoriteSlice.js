import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
	name: "favorite",
	initialState: { isFavorite: false, favorites: [] },
	reducers: {
		toggle(state, action) {
			// modific state-ul la toate cardurile
			state.isFavorite = !state.isFavorite;

			console.log(action.payload);
			// creez array-ul pentru favorites
			// action.payload sunt datele care vin din dispatch()
			const newListing = action.payload;
			newListing.isFavorite = true;
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
console.log(favoriteActions);

export default favoriteSlice;
