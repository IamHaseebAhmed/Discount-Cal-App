import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [orgPrice, setOrgPrice] = useState(0);
  const [disPercent, setDisPercent] = useState(0);
  // const [final, setFinal] = useState({});

  const orgPriceHandler = (price) => {
    setOrgPrice(price);
  };

  const disPercentHandler = (percent) => {
    setDisPercent(percent);
  };

  const saveAmount = () => {
    let disAmount = orgPrice * ( disPercent / 100 )
    return disAmount;
  }
  const finalPrice = () => {
    let finalAmount = orgPrice - saveAmount()
     return finalAmount;
  }

  return (
    <View style={styles.container}>
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

        <Text>
          {(orgPrice !== 0 && disPercent !== 0 ) ? "You Save: "+saveAmount() : ""}
        </Text>
        <Text>
          {(orgPrice !== 0 && disPercent !== 0 ) ? "Final Price: "+finalPrice() : ""}
        </Text>

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
