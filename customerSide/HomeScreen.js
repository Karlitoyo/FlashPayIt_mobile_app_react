import * as React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const imageMap = {
  uri: "https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg",
};

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={imageMap}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
});