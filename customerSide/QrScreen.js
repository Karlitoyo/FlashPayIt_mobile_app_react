import * as React from "react";
import { View } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import MapCarosel from "../components/MapsOverlLay";

const QrScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Ionicons name="qr-code-outline" size={200} /> */}
      <MapCarosel />
    </View>
  );
};

export default QrScreen;
