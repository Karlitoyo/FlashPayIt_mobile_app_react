import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../customerSide/HomeScreen";
import DealsScreen from "../customerSide/DealsScreen";
import QrScreen from "../customerSide/QrScreen";
import RewardsScreen from "../customerSide/RewardsScreen";
import SettingsScreen from "../customerSide/SettingsScreen";
import TopBarNavigator from "../navigation/TopBarNavigator";

<HomeScreen />;

<DealsScreen />;

<QrScreen />;

<RewardsScreen />;

<SettingsScreen />;

const Tab = createBottomTabNavigator();

export default function AppPage() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "compass-outline" : "ios-compass-outline";
          } else if (route.name === "Deals") {
            iconName = focused ? "pricetags-outline" : "ios-pricetags-outline";
          } else if (route.name === "Rewards") {
            iconName = focused ? "ribbon-outline" : "ios-ribbon-outline";
          } else if (route.name === "Settings") {
            iconName = focused
              ? "person-circle-outline"
              : "ios-person-circle-outline";
          } else if (route.name === "QR") {
            iconName = focused ? "qr-code-outline" : "ios-qr-code-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Deals" component={DealsScreen} />
      <Tab.Screen name="QR" component={QrScreen} />
      <Tab.Screen name="Rewards" component={RewardsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
