import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

import RecipeList from "./RecipeList/RecipeList";
import { useSelector } from "react-redux";

const Recipes = ({ searchValue }) => {
  const { recipes } = useSelector((state) => state.recipes);
  const recipesLoaded = useSelector((state) => state.recipes.loaded);

  const newRecipes = [...recipes];

  const filterRecipes = newRecipes.filter((recipe) => {
    return recipe.strMeal.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipes</Text>
      <View style={styles.cards}>
        {recipesLoaded ? (
          filterRecipes.map((recipe) => {
            return (
              <RecipeList
                key={recipe.idMeal}
                id={recipe.idMeal}
                source={recipe.strMealThumb}
                name={recipe.strMeal}
              />
            );
          })
        ) : (
          <View style={styles.loading}>
            <ActivityIndicator
              size={100}
              color="#0bb3b2"
              style={{ backgroundColor: "transparent" }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Recipes;

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "700",
  },
  cards: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
    width: "100%",
    paddingBottom: 10,
  },
  loading: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    marginTop: 40,
  },
});
