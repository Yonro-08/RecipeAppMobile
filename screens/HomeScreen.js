import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import HeaderHome from "../components/Home/HeaderHome/HeaderHome";
import TitleHome from "../components/Home/TitleHome/TitleHome";
import FormHome from "../components/Home/FormHome/FormHome";
import CategoryRecipe from "../components/Home/CategoriesRecipe/CategoriesRecipe";
import Recipes from "../components/Home/Recipes/Recipes";

const HomeScreen = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderHome />
        <TitleHome />
        <FormHome setSearchValue={setSearchValue} />
        <CategoryRecipe />
        <Recipes searchValue={searchValue} />
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
