import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

import { updateActiveCategories } from "../../../../store/categoriesSlice";

import { colors } from "../../../../assets/constants/colors";

const CategoryItem = ({ category, paddingRight, isActive }) => {
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(updateActiveCategories(category.strCategory));
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        paddingRight,
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <View
        style={[
          styles.imagesContainer,
          {
            backgroundColor: isActive
              ? colors.amber300
              : "rgba(177,177,177, 0.4)",
          },
        ]}
      >
        <Image
          source={{ uri: category.strCategoryThumb }}
          style={styles.image}
        />
      </View>
      <Text style={styles.text}>{category.strCategory}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  imagesContainer: {
    width: 64,
    padding: 8,
    borderRadius: 999,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 9999,
  },
  text: {
    textAlign: "center",
  },
});
