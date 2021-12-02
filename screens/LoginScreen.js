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

const HomeScreen = ({ navigation, route }) => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.header}>
      <Text>Welcome to FlashPayIt!</Text>
      <View>
        <Image
          source={require("../assets/images/Flash-Logo.png")}
          style={styles.image}
        ></Image>
      </View>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Please enter your E-mail"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Please enter your Password"
          keyboardType="numeric"
        />
      </SafeAreaView>
      <Button
        title="Login"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate("Details", {
            itemId: 86.0,
            otherParam: "Welcome Jayesh",
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
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

export default HomeScreen;
