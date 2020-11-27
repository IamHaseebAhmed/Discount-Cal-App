import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

var DATA = [];

const Item = ({ details }) => (
  <View style={styles.item}>
    <Text style={styles.originalPrice}>
      Original Price : ${details.Original_Price}
    </Text>
    <Text style={styles.discPercent}>
      Discount : {details.DiscountPercentage} %
    </Text>
    <Text style={styles.finalPrice}>
      Final Price After Discount : ${details.FinalPriceAfterDiscount}
    </Text>
  </View>
);

const SavedList = (props) => {
  DATA = props.list;

  const renderItem = ({ item }) => <Item details={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => props.hideModal()}>
        <Text> {'<'} BACK</Text>
      </TouchableOpacity>

      {DATA.length === 0 ? (<Text>Your List is empty...</Text>) : (
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 10,
    width: 300,
  },
  backBtn: {
    margin: 20,
    width: 70,
    padding: 5,
    backgroundColor: 'lightgrey',
    borderRadius: 30,
  },
  item: {
    // textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#e74c3c',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5
  },
  originalPrice: {
    fontSize: 14,
    color: '#fff',
  },
  discPercent: {
    fontSize: 14,
    color: '#fff',
  },
  finalPrice: {
    fontSize: 16,
    color: '#fff',
  },
});

export default SavedList;
