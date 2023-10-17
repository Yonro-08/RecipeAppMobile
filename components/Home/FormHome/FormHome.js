import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";

const FormHome = ({ setSearchValue }) => {
  const [inputValue, setInputValue] = useState("");

  const onPress = () => {
    setSearchValue(inputValue);
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
        <TextInput
          value={inputValue}
          style={styles.input}
          placeholder="Search any recipe"
          onChangeText={(text) => setInputValue(text)}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
          <Icon name="search" size={15} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default FormHome;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "rgba(25, 31, 52, 0.2)",
    borderRadius: 50,
  },
  input: {
    width: "88%",
  },
  buttonContainer: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 50,
  },
});
