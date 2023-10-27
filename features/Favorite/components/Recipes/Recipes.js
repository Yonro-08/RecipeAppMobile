import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import RecipeList from "../RecipeList/RecipeList";
import { getData } from "../../../../utils/asyncStorage";
import { useDispatch, useSelector } from "react-redux";
import { getFavorite } from "../../../../store/favoriteSlice";

const Recipes = () => {
  const dispatch = useDispatch();
  const { recipes } = useSelector((state) => state.favorites);

  const getAsyncStore = async () => {
    const newRecipes = JSON.parse(await getData("recipes")) || [];
    dispatch(getFavorite(newRecipes));
  };

  useEffect(() => {
    getAsyncStore();
  }, [recipes]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Recipes</Text>
      <View style={styles.cards}>
        {recipes &&
          recipes.length > 0 &&
          recipes.map((recipe) => {
            return (
              <RecipeList
                key={recipe.idMeal}
                id={recipe.idMeal}
                source={recipe.strMealThumb}
                name={recipe.strMeal}
              />
            );
          })}
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            await AsyncStorage.removeItem("recipes");
          }}
        >
          <Text style={styles.buttonText}>Очистить список</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Recipes;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginVertical: 20,
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
  button: {
    alignItems: "center",
    padding: 10,
    marginVertical: 20,
    backgroundColor: "darkblue",
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
});
