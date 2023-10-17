import { StyleSheet, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import SafeAreaView from "../../../SafeAreaView/SafeAreaView";
import { useState } from "react";

const HeaderTab = ({ navigation, back }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => (back ? navigation.goBack() : undefined)}
        style={styles.backContainer}
      >
        <Icon name="chevron-back" size={20} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => setIsFavorite(!isFavorite)}
      >
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
