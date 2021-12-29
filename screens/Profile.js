import React from "react";
import { Button, View, Text, StyleSheet, ScrollView } from "react-native";
import Hotoffers from "../components/profilePageHotOffers";

const ProfileScreen = ({ route, navigation }) => {
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
          <View style={styles.button}>
            <Button
              title="Logout"
              onPress={() => navigation.navigate("Home")}
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
