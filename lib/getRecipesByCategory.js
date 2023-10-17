export const getRecipesByCategory = async (activeCategory) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeCategory}`
  );
  const data = await response.json();
  return data.meals;
};
