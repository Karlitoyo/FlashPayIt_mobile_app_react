import * as React from "react";
import {
  Button,
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native-gesture-handler";
import HomeScreen from "./HomeScreen";
import DealsScreen from "./DealsScreen";

const QrScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Ionicons name="qr-code-outline" size={200} />
    </View>
  );
};

export default QrScreen;
