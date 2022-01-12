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
import { useForm, Controller } from "react-hook-form";

const BusinessUpload = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => console.log(data);

  return (
    <SafeAreaView>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            iconName="person"
            iconType="Material"
            placeholder="Upload Your Campaign"
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
          />
        )}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
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
