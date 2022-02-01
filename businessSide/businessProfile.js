import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BusinessPage from "./BusinessPage";
import BusinessLanding from "./BusinessLandingPage";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

function BusinessProfile() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "compass-outline" : "ios-compass-outline";
          } else if (route.name === "Settings") {
            iconName = focused
              ? "person-circle-outline"
              : "ios-person-circle-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={BusinessPage} />
      <Tab.Screen name="Settings" component={BusinessLanding} />
    </Tab.Navigator>
  );
}

export default BusinessProfile;
