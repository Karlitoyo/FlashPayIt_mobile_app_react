import React, { Fragment } from "react";
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";

import BusinessUpload from "../components/BusinessItemsUpload";

function BusinessPage() {
  return (
    <Fragment>
      <BusinessUpload />
    </Fragment>
  );
}

export default BusinessPage;
