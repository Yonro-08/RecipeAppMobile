import { Image, StyleSheet, Text, View } from "react-native";
import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import { colors } from "../assets/constants/colors";
const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.welcomeImage}
        source={require("../assets/images/welcome.png")}
      />
    </SafeAreaView>
  );
};
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: colors.amber500,
  },
  welcomeImage: {
    width: 50,
    height: 50,
  },
});
