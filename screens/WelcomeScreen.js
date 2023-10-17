import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";

import { fetchCategories } from "../store/categoriesSlice";
import { fetchRecipes } from "../store/recipesSlice";
import SafeAreaView from "../components/SafeAreaView/SafeAreaView";

import { colors } from "../assets/constants/colors";

const WelcomeScreen = ({ navigation }) => {
  const { loaded: categoriesLoaded, activeCategory } = useSelector(
    (state) => state.categories
  );
  const recipesLoaded = useSelector((state) => state.recipes.loaded);

  const dispatch = useDispatch();

  const bigCirclePadding = useSharedValue(0);
  const smallCirclePadding = useSharedValue(0);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchCategories());
      bigCirclePadding.value = withSpring(35);
      smallCirclePadding.value = withSpring(35);
    }, 1000);
  }, []);

  useEffect(() => {
    if (activeCategory) {
      dispatch(fetchRecipes(activeCategory));
    }
  }, [activeCategory]);

  useEffect(() => {
    if (recipesLoaded && categoriesLoaded) {
      navigation.navigate("Home");
    }
  }, [recipesLoaded, categoriesLoaded]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.bigCircle, { padding: bigCirclePadding }]}>
        <Animated.View
          style={[styles.smallCircle, { padding: smallCirclePadding }]}
        >
          <Image
            style={styles.welcomeImage}
            source={require("../assets/images/welcome.png")}
          />
        </Animated.View>
      </Animated.View>
      <View>
        <Text style={styles.welcomeText}>Foody</Text>
        <Text style={styles.welcomeSubText}>Food is always right</Text>
      </View>
    </SafeAreaView>
  );
};
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: colors.amber500,
  },
  bigCircle: {
    marginBottom: 50,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 9999,
  },
  smallCircle: {
    backgroundColor: "rgba(255,255,255,0.5)",
    opacity: 0.8,
    borderRadius: 9999,
  },
  welcomeImage: {
    position: "relative",
    width: 200,
    height: 200,
  },
  welcomeText: {
    fontWeight: "700",
    fontSize: 60,
    color: "white",
    textAlign: "center",
  },
  welcomeSubText: {
    fontWeight: "300",
    fontSize: 20,
    color: "white",
  },
});
