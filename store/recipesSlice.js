import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRecipesByCategory } from "../lib/getRecipesByCategory";

const initialState = {
  recipes: [],
  loaded: false,
};

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchByRecipes",
  async (category) => {
    const response = await getRecipesByCategory(category);
    return response;
  }
);

export const recipesSlice = createSlice({
  name: "recipes",
  initialState: { ...initialState },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.pending, (state) => {
      state.loaded = false;
    });
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.recipes = action.payload;
      state.loaded = true;
    });
  },
});

export default recipesSlice.reducer;
