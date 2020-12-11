import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Config from "../screens/configs/Config";

const RouteConfig = () => {
    const Stack = createStackNavigator();

  return (
    <Stack.Navigator
    screenOptions={{
        headerStyle: { backgroundColor: "#001C47" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}>
      <Stack.Screen
        name="Configs"
        component={Config}
        options={{ title: "Configurações" }}
      />
    </Stack.Navigator>
  );
};
export default RouteConfig;
