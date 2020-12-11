import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ title, onPress, disabled }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={styles.container}
        disabled={disabled}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    width: 180,
    marginHorizontal: 10,
    marginTop: 20,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },

  text: {
    color: "#001C47",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default Button;
