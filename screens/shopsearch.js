import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigShopUHeader}> Let{ `'` }s shopU! </Text>
        <Text style={styles.searchForProducts}> Search for a Product </Text>
        <View style={styles.searchBox}></View>
        <Image source={require('./images/search_icon.png')} style={styles.searchIconStyle} />
        <Image source={require('./images/person_icon.png')} style={styles.personIconStyle} />
        <Image source={require('./images/top_shopping_cart.png')} style={styles.topCartIconStyle} />
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
    bottom: 140,
  },
  searchForProducts: {
    color: '#ffffff',
    fontFamily: 'Arial',
    fontSize: 22,
    bottom: 37,
    right: 30,
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
  },
  personIconStyle: {
    width: 35,
    height: 35, 
    bottom: 460,
    left: 175,
  },
  topCartIconStyle: {
    width: 35,
    height: 35, 
    bottom: 487,
    right: 175,
  },
  searchIconStyle: {
    width: 30,
    height: 30, 
    bottom: 120,
    left: 110,
  },
});