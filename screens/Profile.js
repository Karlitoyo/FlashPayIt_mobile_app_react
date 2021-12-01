import React from "react";
import { Button, View, Text } from "react-native";

const ProfileScreen = ({ route, navigation }) => {
  /* 2. Get the param */
  //   const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile</Text>
      <Text>Welcome Jayesh</Text>
      <Text>Wallet Balance: €45</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="Enter Flash"
        onPress={() => navigation.navigate("AppPage")}
      />
    </View>
  );
};

export default ProfileScreen;
