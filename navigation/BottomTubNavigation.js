import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";

import HomeScreenNavigation from "./HomeScreenNavigation";
import FavoriteScreenNavigation from "./FavoriteScreenNavigation";

const Tab = createBottomTabNavigator();

const BottomTubNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreenNavigation}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="bowl" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="FavoriteTab"
        component={FavoriteScreenNavigation}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="heart" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTubNavigation;
