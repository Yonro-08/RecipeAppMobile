import { Image, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const HeaderHome = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/avatar.png")}
        style={styles.image}
      />
      <Icon name="notifications-outline" size={40} />
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 40,
  },
  image: {
    width: 48,
    height: 48,
  },
});
