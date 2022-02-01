import React from "react";
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const AppLanding = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.header}>
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={styles.background}
      />
      <View>
        <Image
          source={require("../assets/images/Flash-Logo.png")}
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.button}>
        <Button
          title="Customer Login"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate("Login", {});
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Business Login"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate("BusinessLogin", {});
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 12,
    backgroundColor: "transparent",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(91, 170, 236, 0.2)",
  },
  image: {
    height: 200,
    width: 200,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});

export default AppLanding;
