import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RouteCounters from "./route.counters";
import RouteConfig from "./route.config";
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
  
        switch (route.name) {
          case 'COUNTERS':
            iconName = 'plus-circle';
            break;
          case 'CONFIG':
            iconName = 'settings';
            break;
          default:
            iconName = 'circle';
            break;
        }
  
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
      tabBarOptions={{
        activeTintColor: '#F39003',
        inactiveTintColor: '#777',
        style: {
          backgroundColor: "#001C47",
        },
      }}
    >
      <Tab.Screen
        name="COUNTERS"
        component={RouteCounters}
        options={{ headerShown: false, title:'CONTADORES'}}
      />
      <Tab.Screen
        name="CONFIG"
        component={RouteConfig}
        options={{ headerShown: false, title:'CONFIGURÇÕES'}}
      />
    </Tab.Navigator>
  );
};

export default Routes;
