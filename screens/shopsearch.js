import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigShopUHeader}> Let's shopU! </Text>
        <Text style={styles.searchForProducts}> Search for a Product </Text>
        <View style={styles.searchBox}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff715B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigShopUHeader: {
    fontSize: 85,
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'Arial',
    bottom: 160,
  },
  searchForProducts: {
    color: '#ffffff',
    fontFamily: 'Arial',
    fontSize: 20,
    bottom: 38,
    right: 38,
  },
  searchBox: {
    borderRadius: 50,
    color: '#ffffff',
    borderColor: '#ffffff',
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderWidth: 2,
    width: 300,
    height: 55,
    bottom: 75,


  }


});
