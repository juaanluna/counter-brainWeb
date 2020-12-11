import React from "react";
import {
  View,
  StatusBar,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CounterComponent from "../../components/counterContainer/Counter";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Counters = () => {
  
  const counters = useSelector((state) => state.counters.counters);
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#001C47" barStyle="light-content" />

      <ScrollView style={styles.scroll}>
        {counters.map((count) => {
          return (
            <TouchableOpacity
              onPress={() => navigate("Configs", { id: count.id })}
            >
              <CounterComponent name={count.name} value={count.counterValue} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: "#0082C9",
  },
  scroll: {
    width: "100%",
  },
});

export default Counters;
