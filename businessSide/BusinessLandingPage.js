import React from "react";
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated,
  StyleSheet,
} from "react-native";
import StickyParallaxHeader from "react-native-sticky-parallax-header";

const windowHeight = Dimensions.get("window").height;
const { event, ValueXY } = Animated;
const scrollY = new ValueXY();

const text = {
  biography: "props from business sign up go here",
  Campaigns: "Campaigns",
  Statistics: "Statistics",
};

const CutomHeaderScreen = () => {
  const renderContent = (x) => (
    <View style={styles.contentContiner}>
      <Text style={styles.contentText}>{x}</Text>
    </View>
  );

  const renderHeader = () => {
    const opacity = scrollY.y.interpolate({
      inputRange: [0, 60, 90],
      outputRange: [0, 0, 1],
      extrapolate: "clamp",
    });

    return (
      <View style={styles.headerCotainer}>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => console.warn("CLICKED")}>
            <Image
              style={styles.headerImage}
              resizeMode="contain"
              source={{
                uri: "https://close.png",
              }}
            />
          </TouchableOpacity>
          <Animated.View style={{ opacity }}>
            <Text style={styles.headerText}>Business 1</Text>
          </Animated.View>
        </View>
      </View>
    );
  };

  return (
    <StickyParallaxHeader
      headerType="TabbedHeader"
      backgroundImage={{
        uri: "https://yoda.jpeg",
      }}
      backgroundColor={"black"}
      header={renderHeader}
      title={"Business 1"}
      titleStyle={styles.titleStyle}
      foregroundImage={{
        uri: "https://starwars.png",
      }}
      tabs={[
        {
          title: "Biography",
          content: renderContent(text.biography),
        },
        {
          title: "Campaigns",
          content: renderContent(text.Campaigns),
        },
        {
          title: "Statistics",
          content: renderContent(text.Statistics),
        },
      ]}
      tabTextContainerStyle={styles.tabTextContainerStyle}
      tabTextContainerActiveStyle={styles.tabTextContainerActiveStyle}
      tabTextStyle={styles.tabTextStyle}
      tabTextActiveStyle={styles.tabTextActiveStyle}
      tabWrapperStyle={styles.tabWrapperStyle}
      tabsContainerStyle={styles.tabsContainerStyle}
      scrollEvent={event(
        [{ nativeEvent: { contentOffset: { y: scrollY.y } } }],
        { useNativeDriver: false }
      )}
    />
  );
};
export default CutomHeaderScreen;

const styles = StyleSheet.create({
  headerCotainer: {
    width: "100%",
    paddingHorizontal: 24,
    paddingTop: 55,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
  },
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerImage: {
    width: 20,
    height: 20,
  },
  headerText: {
    color: "white",
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  titleStyle: {
    color: "white",
    fontWeight: "bold",
    padding: 10,
    fontSize: 40,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  tabTextContainerStyle: {
    backgroundColor: "transparent",
    borderRadius: 18,
  },
  tabTextContainerActiveStyle: {
    backgroundColor: "#FFC106",
  },
  tabTextStyle: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: "white",
  },
  tabTextActiveStyle: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: "black",
  },
  tabWrapperStyle: {
    paddingVertical: 10,
  },
  tabsContainerStyle: {
    paddingHorizontal: 10,
  },
  contentContiner: {
    height: windowHeight,
    padding: 10,
  },
  contentText: {
    fontSize: 16,
  },
});
