import { getData, storeData } from "../../../utils/asyncStorage";

export const toggleFavorite = async (isFavorite, setIsFavorite, recipe) => {
  const data = JSON.parse(await getData("recipes")) || [];

  if (!isFavorite) {
    data.push(recipe);
    storeData("recipes", JSON.stringify(data));
    setIsFavorite(true);
    return;
  }

  const filterData = data.filter((elem) => elem.idMeal !== recipe.idMeal);
  storeData("recipes", JSON.stringify(filterData));
  setIsFavorite(false);
};
