import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/Profile";
import HomeApp from "../App";
import AppPage from "../screens/TabsScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Details"
          component={ProfileScreen}
          options={{ title: "Profile" }}
        />
        <Stack.Screen
          name="First"
          component={HomeApp}
          options={{ title: "First" }}
        />
        <Stack.Screen
          name="AppPage"
          component={AppPage}
          options={{ title: "FlashPayIt" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
