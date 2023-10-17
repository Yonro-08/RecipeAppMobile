import { configureStore } from "@reduxjs/toolkit";

import categoriesReducer from "./categoriesSlice";
import recipesSlice from "./recipesSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    recipes: recipesSlice,
  },
});
