import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../customerSide/LoginScreen";
import ProfileScreen from "../customerSide/Profile";
import BusienssLoginScreen from "../businessSide/BusinessLogin";
import AppLanding from "../screens/AppLanding";
import BusinessPage from "../businessSide/BusinessPage";
import BusinessProfile from "../businessSide/businessProfile";
import AppPage from "../screens/TabsScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AppLanding">
        <Stack.Screen
          name="Login"
          component={HomeScreen}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Details"
          component={ProfileScreen}
          options={{ title: "Profile" }}
        />
        <Stack.Screen
          name="BusinessLogin"
          component={BusienssLoginScreen}
          options={{ title: "Business" }}
        />
        <Stack.Screen
          name="AppPage"
          component={AppPage}
          options={{ title: "AppPage" }}
        />
        <Stack.Screen
          name="AppLanding"
          component={AppLanding}
          options={{ title: "FlashPayIt" }}
        />
        <Stack.Screen
          name="BusinessPage"
          component={BusinessPage}
          options={{ title: "BusinessPage" }}
        />
        <Stack.Screen
          name="BusinessProfile"
          component={BusinessProfile}
          options={{ title: "BusinessProfile" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
