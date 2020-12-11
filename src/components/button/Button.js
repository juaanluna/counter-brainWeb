import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ icon, title, onPress, disabled }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={styles.container}
        disabled={disabled}
      >
        <View style={{flexDirection:'row', alignItems:'center', }}>
          <Text style={styles.icon}>{icon}</Text>
          <Text style={styles.text}>{title}</Text>
        </View>
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
    fontSize: 14,
  },
  icon: {
    color: "#001C47",
    marginRight:8,
  },
});

export default Button;
