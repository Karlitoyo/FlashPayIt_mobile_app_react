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

const AppLanding = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.header}>
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
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 200,
    width: 200,
  },
});

export default AppLanding;
