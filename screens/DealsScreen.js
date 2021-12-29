import * as React from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native-gesture-handler";

const imageDeals = {
  uri: "https://kclr96fm.com/media/2019/03/restaurant.jpeg",
};

const imageDublin = {
  uri: "https://www.google.com/maps/d/thumbnail?mid=1dUL42PoNd9bCtxzjK9rxiiMYbeY&hl=en",
};

const DealsScreen = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Image
          source={imageDeals}
          resizeMode="cover"
          style={styles.stretch}
        ></Image>
        <View style={styles.dealsRow}>
          <Ionicons name="logo-twitter" color="blue" size={32} />
          <Ionicons name="logo-instagram" color="purple" size={32} />
          <Ionicons name="call-outline" color="black" size={32} />
          <Ionicons name="logo-facebook" color="blue" size={32} />
          <Ionicons name="share-social-outline" color="black" size={32} />
        </View>
        <View>
          <Image
            source={imageDublin}
            resizeMode="cover"
            style={styles.stretch}
          ></Image>
        </View>
        <View>
          <Text style={styles.ReviewsSection}>Reviews</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.ReviewsSection}>
          <Ionicons name="person-circle-outline" size={32} />
          <Text style={{ paddingTop: 7 }}>MrsReview2022</Text>
          <Text>
            Very professional staff, great food, great music! Will definetely
            visit again! Don't fotget to try their Italian pasta!!!
          </Text>
          <Ionicons
            style={{ paddingBottom: 5 }}
            name="thumbs-up-outline"
            size={16}
          />
        </View>
        <View style={styles.line}></View>
        <View>
          <Text style={styles.ReviewsSection}>Add Review</Text>
        </View>
        <View>
          <TextInput style={styles.TextInputArea}></TextInput>
        </View>
        <Button title="Post"></Button>
      </View>
    </ScrollView>
  );
};

export default DealsScreen;

const styles = StyleSheet.create({
  stretch: {
    width: "100%",
    height: 200,
    resizeMode: "stretch",
  },
  dealsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 10,
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "95%",
    marginLeft: 10,
  },
  ReviewsSection: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 10,
    paddingTop: 7,
  },
  TextInputArea: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 5,
  },
});
