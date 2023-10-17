import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RecipeList = ({ id, source, name }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate(`RecipeDetail`, { id });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}
    >
      <Image source={{ uri: source }} style={styles.image} />
      <Text style={styles.text} numberOfLines={1}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default RecipeList;

const styles = StyleSheet.create({
  container: {
    width: "48%",
  },
  image: {
    height: 250,
    marginBottom: 5,
    borderRadius: 20,
  },
  text: {
    textAlign: "center",
  },
});
