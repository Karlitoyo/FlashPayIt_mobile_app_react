import * as React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import LoginScreen from "./LoginScreen";

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 10,
    width: "70%",
  },
  button: {
    width: 100,
  },
});
