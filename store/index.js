import { configureStore } from "@reduxjs/toolkit";

import categoriesReducer from "./categoriesSlice";
import recipesSlice from "./recipesSlice";
import recipeSlice from "./recipeSlice";
import favoriteSlice from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    recipes: recipesSlice,
    recipe: recipeSlice,
    favorites: favoriteSlice,
  },
});
