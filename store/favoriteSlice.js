import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: { ...initialState },
  reducers: {
    getFavorite(state, action) {
      state.recipes = action.payload;
    },
    handleToggleFavorite(state, action) {
      state.recipes = action.payload;
    },
  },
});

export const { getFavorite, handleToggleFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
