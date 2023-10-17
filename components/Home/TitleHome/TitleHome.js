import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TitleHome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Hello, Yonro!</Text>
      <Text style={styles.title}>
        Make your own food, stay at{" "}
        <Text style={{ color: "yellow" }}>home</Text>
      </Text>
    </View>
  );
};

export default TitleHome;

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
  },
  title: {
    fontWeight: "600",
    fontSize: 36,
  },
});
