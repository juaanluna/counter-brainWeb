import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Counters from "../screens/counters/Counters";

const RouteCounters = () => {
    const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#001C47" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Counters"
        component={Counters}
        options={{ title: "COUNTERS" }}
      />
    </Stack.Navigator>
  );
};
export default RouteCounters;
