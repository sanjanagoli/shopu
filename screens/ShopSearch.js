import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';


export default class ShopSearch extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.orangeRectangle}></View>
        <Text style={styles.header}>Let{`'`}s shopU! </Text>
        <View style={styles.slantedBlueRectangle}></View>
        <View style={styles.slantedPurpleRectangle}></View>
        <View style={styles.whiteCard}></View>
        <View style={styles.searchLine}></View>
        <Text style={styles.searchText}>Search for a Product</Text>
        <Image source={require('./../assets/images/search_icon.png')}style={styles.searchIcon} />
        <Image source={require('./../assets/images/top_shopping_cart.png')}style={styles.topShopCart} />
        <Image source={require('./../assets/images/profile_head.png')}style={styles.profileHead} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orangeRectangle: {
    backgroundColor: '#FF715B',
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height/2.5,
    top: 0, 
    bottom: 0,
    position: 'absolute',
  },
  header: {
    fontSize: 100,
    color: '#fff',
    position: 'absolute',
    top: 80,
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  slantedBlueRectangle: {
    position: 'absolute',
    backgroundColor: '#6DC4E0',
    transform:([{ rotateZ:'10deg'}]),
    width: Dimensions.get("screen").width + 100,
    height: 120,
    top: Dimensions.get("screen").height/2,
  },
  slantedPurpleRectangle: {
    position: 'absolute',
    backgroundColor: '#605DF1',
    transform:([{ rotateZ:'10deg'}]),
    width: Dimensions.get("screen").width + 100,
    height: 120,
    top: Dimensions.get("screen").height/2 + 150,
  },
  whiteCard: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    width: Dimensions.get("screen").width - 30,
    height: Dimensions.get("screen").height/2 - 20,
    top: Dimensions.get("screen").height/2 - 120,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 3,
    shadowOpacity: 0.9,
  },
  searchLine: {
    position: 'absolute',
    backgroundColor: '#6DC4E0',
    width: Dimensions.get("screen").width - 150,
    height: 3,
    top: Dimensions.get("screen").height/2 + 120,
  },
  searchText: {
    fontSize: 20,
    color: '#605DF1',
    position: 'absolute',
    top: Dimensions.get("screen").height/2 + 80,
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  searchIcon: {
    position: 'absolute',
    top: Dimensions.get("screen").height/2 + 75,
    left: 80,
    height: 30,
    width: 30,
  },
  topShopCart: {
    position: 'absolute',
    top: 50,
    left: 20,
    height: 30,
    width: 30,
  },
  profileHead: {
    position: 'absolute',
    top: 50,
    right: 20,
    height: 30,
    width: 30,
  }
});
