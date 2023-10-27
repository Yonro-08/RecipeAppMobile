import { ScrollView, StyleSheet } from "react-native";

import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import { Recipes } from "../features/Favorite";

const FavoriteScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Recipes />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
