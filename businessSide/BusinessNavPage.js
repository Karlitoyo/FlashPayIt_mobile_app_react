import React from "react";
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  Settings,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator;

function BusinessNavBottom() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="BusinessPage" component={() => <Text>Tab1</Text>} />
        <Tab.Screen
          name="BusinessProfile"
          component={() => <Text>Tab2</Text>}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BusinessNavBottom;
