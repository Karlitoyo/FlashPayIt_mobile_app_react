import React from "react";
import { Button, View, Text, StyleSheet, ScrollView } from "react-native";
import Hotoffers from "../components/profilePageHotOffers";
import QrScreen from "./QrScreen";
import HomeScreen from "./HomeScreen";
import DealsScreen from "./DealsScreen";

const ProfileScreen = ({ route, navigation }) => {
  createHomeStack = () => {
    <Stack.Navigator>
      <Stack.Screen name="QRScreen" component={QrScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Deals" component={DealsScreen} />
    </Stack.Navigator>;
  };

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <Text>Welcome, Jayesh</Text>
        <Text>Wallet Balance: €45</Text>
        <View style={styles.line}></View>
        <View style={styles.fire}>
          <Text>Hot Offers!</Text>
          <Text>🔥</Text>
        </View>
        <Hotoffers />
        <View style={styles.buttonStyle}>
          <View style={styles.button}>
            <Button
              title="Enter"
              onPress={() => navigation.navigate("AppPage")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 10,
    width: "70%",
  },
  button: {
    width: 100,
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "95%",
    marginLeft: 10,
  },
  fire: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 40,
  },
});
