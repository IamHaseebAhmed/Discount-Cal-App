import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [orgPrice, setOrgPrice] = useState(0);
  const [disPercent, setDisPercent] = useState(0);

  const orgPriceHandler = (price) => {
    setOrgPrice(price);
  };

  const disPercentHandler = (percent) => {
    setDisPercent(percent);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View>
        <Text>Original Price:</Text>
        <TextInput
          style={styles.inputFields}
          onChangeText={(price) => orgPriceHandler(price)}
        />

        <Text>Discount Percentage:</Text>
        <TextInput
          style={styles.inputFields}
          onChangeText={(price) => disPercentHandler(price)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputFields: {
    height: 40,
    width: 200,
    padding: 10,
    borderWidth: 1,
    marginBottom: 30,
  },
});
