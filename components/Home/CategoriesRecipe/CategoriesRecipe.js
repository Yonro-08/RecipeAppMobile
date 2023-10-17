import Animated, { FadeInDown } from "react-native-reanimated";
import { useSelector } from "react-redux";

import CategoryList from "./CategoryList/CategoryList";

const CategoriesRecipe = () => {
  const { activeCategory, categories } = useSelector(
    (state) => state.categories
  );

  return (
    <Animated.ScrollView
      entering={FadeInDown.duration(500)}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginBottom: 20 }}
    >
      {categories.length > 0 &&
        categories.map((category, index) => {
          const paddingRight = index === categories.length ? 0 : 15;
          const isActive = activeCategory === category.strCategory;
          return (
            <CategoryList
              key={category.idCategory}
              category={category}
              paddingRight={paddingRight}
              isActive={isActive}
            />
          );
        })}
    </Animated.ScrollView>
  );
};

export default CategoriesRecipe;
