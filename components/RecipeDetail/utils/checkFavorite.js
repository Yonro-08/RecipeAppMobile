import { getData } from "../../../utils/asyncStorage";

export const checkFavorite = async (recipe, setIsFavorite) => {
  const localRecipes = JSON.parse(await getData("recipes")) || [];

  if (localRecipes.length > 0) {
    localRecipes.forEach((localRecipe) => {
      if (localRecipe.idMeal === recipe.idMeal) {
        setIsFavorite(true);
      }
    });
  }
};
