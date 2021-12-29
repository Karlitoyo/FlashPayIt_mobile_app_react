import * as React from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

const starBucks = {
  uri: "https://www.packaging-gateway.com/wp-content/uploads/sites/16/2021/04/Starbucks.jpg",
};

const MilanosPizza = {
  uri: "https://milano.ie/Content/images/our-restaurant/photos/swords.jpg",
};

const ZaraClothes = {
  uri: "https://i2-prod.dailystar.co.uk/incoming/article23991046.ece/ALTERNATES/s1200b/1_Spanish-multinational-clothing-design-retail-company-by.jpg",
};

const RewardsScreen = () => {
  return (
    <ScrollView>
      <View>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text>StarBucks</Text>
            <Text>15% Off!</Text>
            <Image
              source={starBucks}
              resizeMode="cover"
              style={styles.stretch}
            ></Image>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text>Milanos</Text>
            <Text>But one get one half price!</Text>
            <Image
              source={MilanosPizza}
              resizeMode="cover"
              style={styles.stretch}
            ></Image>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text>Zara</Text>
            <Text>10% off!</Text>
            <Image
              source={ZaraClothes}
              resizeMode="cover"
              style={styles.stretch}
            ></Image>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RewardsScreen;

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
  stretch: {
    width: "100%",
    height: 200,
    resizeMode: "stretch",
  },
});
