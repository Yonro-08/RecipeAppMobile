import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon1 from "react-native-vector-icons/FontAwesome5";

import { useEffect } from "react";
import CookieList from "../components/RecipeDetail/components/CookieList/CookieList";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipe } from "../store/recipeSlice";

const RecipeDetailScreen = ({ route }) => {
  const { id } = route.params;
  const dispatch = useDispatch();
  const { recipe, loaded } = useSelector((state) => state.recipe);

  const cookiesStatistic = [
    {
      icon: <Icon name="time-outline" size={25} />,
      title: "Mins",
      param: 35,
    },
    {
      icon: <Icon name="people" size={25} />,
      title: "Servings",
      param: "03",
    },
    {
      icon: <Icon1 name="fire-alt" size={25} />,
      title: "Cal",
      param: 103,
    },
    {
      icon: <Icon1 name="layer-group" size={25} />,
      title: "Easy",
    },
  ];

  useEffect(() => {
    if (id) {
      dispatch(fetchRecipe(id));
    }
  }, [id]);

  return (
    <>
      {loaded ? (
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: recipe?.strMealThumb }}
              style={styles.image}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>{recipe?.strMeal}</Text>
            <Text style={styles.subtitle}>{recipe?.strArea}</Text>
            <View style={styles.cards}>
              {cookiesStatistic.map((item, index) => {
                return <CookieList key={index} item={item} />;
              })}
            </View>
            <View style={styles.ingredients}>
              <Text
                style={{ marginVertical: 10, fontWeight: "700", fontSize: 20 }}
              >
                Ingredients
              </Text>
              {[...Array(20).keys()].map((index) => {
                if (recipe[`strIngredient${index + 1}`]) {
                  return (
                    <View key={index} style={styles.ingredientContainer}>
                      <View style={styles.orangeDot} />
                      <Text style={{ fontWeight: "700" }}>
                        {recipe[`strMeasure${index + 1}`]}
                      </Text>
                      <Text>{recipe[`strIngredient${index + 1}`]}</Text>
                    </View>
                  );
                }
              })}
            </View>
            <View style={{ marginVertical: 10 }}>
              <Text
                style={{ fontSize: 20, fontWeight: "700", marginVertical: 10 }}
              >
                Instructions
              </Text>
              <Text style={{ textAlign: "justify" }}>
                {recipe?.strInstructions}
              </Text>
            </View>
          </View>
        </ScrollView>
      ) : (
        <View style={styles.loading}>
          <ActivityIndicator
            size={100}
            color="#0bb3b2"
            style={{ backgroundColor: "transparent" }}
          />
        </View>
      )}
    </>
  );
};

export default RecipeDetailScreen;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: "auto",
    padding: 5,
  },
  image: {
    width: "100%",
    height: 400,
    borderRadius: 30,
  },
  container: {
    width: "100%",
    height: "auto",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
  },
  cards: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  ingredients: {
    marginVertical: 10,
  },
  ingredientContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  orangeDot: {
    width: 10,
    height: 10,
    backgroundColor: "orange",
    borderRadius: 9999,
  },
});
