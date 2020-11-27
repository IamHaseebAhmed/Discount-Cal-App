import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import SavedList from './components/SavedList';

export default function App() {
  const [orgPrice, setOrgPrice] = useState('');
  const [disPercent, setDisPercent] = useState('');
  const [tempStorage, setTempStorage] = useState([]);
  const [showModal, setShowModal] = useState(false);

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
  };

  const saveInputData = () => {
    const newData = {
      id: Math.random(),
      Original_Price: orgPrice,
      DiscountPercentage: disPercent,
      FinalPriceAfterDiscount: finalPrice(),
    };
    setTempStorage([...tempStorage, newData]);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  const showScreens = () => {
    if (showModal === false) {
      return (
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              margin: 40,
            }}>
            <TouchableOpacity
              style={styles.storedBtn}
              onPress={() => setShowModal(true)}>
              <Text>STORED RECORDS</Text>
            </TouchableOpacity>
          </View>

          <View>
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
          </View>

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
            <TouchableOpacity style={styles.btnSave} onPress={saveInputData}>
              <Text>SAVE</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnClear}
              onPress={() => clearInputData()}>
              <Text>CLEAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return <SavedList list={tempStorage} hideModal={() => hideModal()} />;
    }
  };

  return <View style={styles.container}>{showScreens()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  storedBtn: {
    padding: 10,
    backgroundColor: '#badc58',
    borderRadius: 10
  },
  inputFields: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    marginBottom: 30,
    borderRadius: 5,
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
