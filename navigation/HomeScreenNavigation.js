import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";
import HeaderTab from "../components/RecipeDetail/components/HeaderTab/HeaderTab";

const Stack = createNativeStackNavigator();

const HomeScreenNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecipeDetail"
        component={RecipeDetailScreen}
        options={{
          header: HeaderTab,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeScreenNavigation;
