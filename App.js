import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [orgPrice, setOrgPrice] = useState('');
  const [disPercent, setDisPercent] = useState('');
  // const [final, setFinal] = useState({});

  const orgPriceHandler = (price) => {
    if (price >= 0) {
      setOrgPrice(price);
    }
  };

  const disPercentHandler = (percent) => {
    if (percent <= 100) {
      setDisPercent(percent);
    }
  };

  const saveAmount = () => {
    let disAmount = orgPrice * (disPercent / 100);
    return disAmount.toFixed(2);
  };
  const finalPrice = () => {
    let finalAmount = orgPrice - saveAmount();
    return finalAmount.toFixed(2);
  };

  const clearInputData = () => {
    setOrgPrice('');
    setDisPercent('');
  }

  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: 40,
          }}>
          <TouchableOpacity>
            <Text>STORED RECORDS</Text>
          </TouchableOpacity>
        </View>

        <Text>Original Price:</Text>
        <TextInput
          style={styles.inputFields}
          keyboardType="numeric"
          onChangeText={orgPriceHandler}
          value={orgPrice}
        />
        <Text>Discount Percentage:</Text>
        <TextInput
          style={styles.inputFields}
          keyboardType="numeric"
          onChangeText={disPercentHandler}
          value={disPercent}
        />

        <View style={{ textAlign: 'center' }}>
          <Text>
            {orgPrice !== 0 && disPercent !== 0
              ? 'You Save : $' + saveAmount()
              : ''}
          </Text>
          <Text>
            {orgPrice !== 0 && disPercent !== 0
              ? 'Final Price : $' + finalPrice()
              : ''}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: 20,
          }}>
          <TouchableOpacity style={styles.btnSave}>
            <Text>SAVE</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.btnClear} onPress={() => clearInputData()}>
            <Text>CLEAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputFields: {
    height: 40,
    width: 200,
    padding: 10,
    borderWidth: 1,
    marginBottom: 30,
  },
  btnSave: {
    width: 80,
    height: 40,
    backgroundColor: '#FF3B11',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnClear: {
    width: 80,
    height: 40,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
