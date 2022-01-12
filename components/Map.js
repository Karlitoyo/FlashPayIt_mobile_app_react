import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";

const height = Dimensions.get("window").height;

const Map = () => {
  return (
    <MapView
      style={styles.map}
      loadingEnabled={true}
      region={{
        latitude: 53.3498,
        longitude: 6.2603,
      }}
    ></MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 100,
  },
});

export default Map();
