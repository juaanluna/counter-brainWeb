import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CounterComponent = ({ name, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D8D8D8",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
    marginHorizontal: "10%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  name: {
    color: "grey",
    padding: "3%",
  },
  value: {
    fontWeight: "bold",
    fontSize: 80,
  },
});
export default CounterComponent;
