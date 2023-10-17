import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const CookieList = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{item?.icon}</View>
      <Text style={styles.param}>{item?.param}</Text>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

export default CookieList;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 65,
    height: 120,
    backgroundColor: "#e4c144",
    borderRadius: 30,
  },
  iconContainer: {
    padding: 10,
    marginBottom: 8,
    backgroundColor: "white",
    borderRadius: 9999,
  },
  param: {
    fontSize: 10,
  },
  title: {
    fontSize: 10,
  },
});
