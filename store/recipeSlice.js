import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getRecipeById } from "../lib/getRecipeById";

const initialState = {
  recipe: [],
  loaded: false,
};

export const fetchRecipe = createAsyncThunk(
  "recipe/fetchRecipe",
  async (id) => {
    const response = await getRecipeById(id);
    return response;
  }
);

const recipeSlice = createSlice({
  name: "recipe",
  initialState: { ...initialState },
  extraReducers: (builder) => {
    builder.addCase(fetchRecipe.pending, (state) => {
      state.loaded = false;
    });
    builder.addCase(fetchRecipe.fulfilled, (state, action) => {
      state.recipe = action.payload.meals[0];
      state.loaded = true;
    });
  },
});

export default recipeSlice.reducer;
