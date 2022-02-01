import React, { Fragment, useState } from "react";
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

const BusinessUpload = () => {
  const [description, setDescription] = useState("");
  const [campaign, setCampaign] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [active, setActive] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description, campaign, companyName, active };
      const response = await fetch("http://10.0.2.2:5000/usersdb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Description"
        onChangeText={(description) => {
          setDescription(description);
          // console.log(description);
        }}
      />
      <TextInput
        placeholder="Name of Campaign"
        onChangeText={(campaign) => {
          setCampaign(campaign);
          // console.log(description);
        }}
      />
      <TextInput
        placeholder="Company"
        onChangeText={(companyName) => {
          setCompanyName(companyName);
          // console.log(description);
        }}
      />
      <TextInput
        placeholder="Active"
        onChangeText={(active) => {
          setActive(active);
          // console.log(description);
        }}
      />
      <Button title="Submit" onPress={onSubmitForm} />
      <View style={styles.header}>
        <Fragment>
          <Text>Input Items</Text>
        </Fragment>
      </View>
    </SafeAreaView>
  );
};

export default BusinessUpload;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
