import * as React from "react";
import { View } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

const QrScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Ionicons name="qr-code-outline" size={200} />
    </View>
  );
};

export default QrScreen;
