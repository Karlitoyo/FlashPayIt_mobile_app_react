import * as React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

function Map() {
  return (
    <View>
      <Text>Home is here!</Text>
    </View>
  );
}

function restaurants() {
  return (
    <View>
      <Text>Home is here!</Text>
    </View>
  );
}

function coffee() {
  return (
    <View>
      <Text>Home is here!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Map"
      tabBarOptions={{
        activeTintColor: "#e91e63",
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: "white" },
      }}
    >
      <Tab.Screen
        name="restaurants"
        backgroundColor="blue"
        component={restaurants}
        options={{ tabBarLabel: "restaurants" }}
      />
      <Tab.Screen
        name="Coffee"
        backgroundColor="red"
        component={coffee}
        options={{ tabBarLabel: "Coffee" }}
      />
      <Tab.Screen
        name="Map"
        backgroundColor="yellow"
        component={Map}
        options={{ tabBarLabel: "Bars" }}
      />
    </Tab.Navigator>
  );
}

export default function TopBarNavigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
