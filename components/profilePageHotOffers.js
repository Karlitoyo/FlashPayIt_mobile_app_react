import React from "react";
import { Button, View, StyleSheet, Image } from "react-native";

const StarbucksLogo = {
  uri: "https://ts-spain.com/wp-content/uploads/2019/02/Starbucks.jpg",
};

const NandosLogo = {
  uri: "https://centaur-wp.s3.eu-central-1.amazonaws.com/designweek/prod/content/uploads/2016/01/22083950/logo-1002x596.jpg",
};

const DunnesLogo = {
  uri: "https://lh3.googleusercontent.com/proxy/JVd_6FUDn1VDgDgBMG-ebR2DeuYxmlbe_Fbzw26cPdhYvvckWkTxQqOa17bwb9jGvki1VPV0oM7EmJWuPkUVlBSHXURvhmjUBhqtYu_KSamiI6CLWVf2kRt29Y2D1p7KxWKBFg3Vku6Kdbag5g",
};

const ThreeLogo = {
  uri: "https://www.bitc.ie/wp-content/uploads/2021/10/b1d8dd50fe7f6d77fd83ccebcc5a9a35.jpg-.jpg",
};

const Hotoffers = () => {
  return (
    <View style={{ margin: 30 }}>
      <View style={styles.dealsBox}>
        <View style={styles.box1}>
          <Image
            source={StarbucksLogo}
            resizeMode="cover"
            style={styles.stretch}
          ></Image>
        </View>
        <View style={styles.box2}>
          <Image
            source={NandosLogo}
            resizeMode="cover"
            style={styles.stretch}
          ></Image>
        </View>
      </View>
      <View style={styles.dealsBox}>
        <View style={styles.box3}>
          <Image
            source={DunnesLogo}
            resizeMode="cover"
            style={styles.stretch}
          ></Image>
        </View>
        <View style={styles.box4}>
          <Image
            source={ThreeLogo}
            resizeMode="cover"
            style={styles.stretch}
          ></Image>
        </View>
      </View>
    </View>
  );
};

export default Hotoffers;

const styles = StyleSheet.create({
  dealsBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: 20,
  },
  box1: {
    width: 100,
    height: 100,
    marginHorizontal: 30,
  },
  box2: {
    width: 100,
    height: 100,
    marginHorizontal: 30,
  },
  box3: {
    width: 100,
    height: 100,
    marginHorizontal: 30,
  },
  box4: {
    width: 100,
    height: 100,
    marginHorizontal: 30,
  },
  stretch: {
    width: "100%",
    height: 100,
    resizeMode: "stretch",
    borderRadius: 20,
  },
});
