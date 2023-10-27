import { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Icon from "react-native-vector-icons/Ionicons";
import SafeAreaView from "../../../SafeAreaView/SafeAreaView";

import { checkFavorite } from "../../utils/checkFavorite";
import { toggleFavorite } from "../../utils/toggleFavorite";
import { handleToggleFavorite } from "../../../../store/favoriteSlice";
import { getData } from "../../../../utils/asyncStorage";

const HeaderTab = ({ navigation, back }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { recipe } = useSelector((state) => state.recipe);
  const dispatch = useDispatch();

  const onPress = async () => {
    toggleFavorite(isFavorite, setIsFavorite, recipe);
    dispatch(handleToggleFavorite(JSON.parse(await getData("recipes"))));
  };

  useEffect(() => {
    setIsFavorite(false);
    checkFavorite(recipe, setIsFavorite);
  }, [recipe]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => (back ? navigation.goBack() : undefined)}
        style={styles.backContainer}
      >
        <Icon name="chevron-back" size={20} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.backContainer} onPress={onPress}>
        <Icon name="heart" size={20} color={isFavorite ? "red" : "gray"} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HeaderTab;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  backContainer: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 9999,
  },
});
