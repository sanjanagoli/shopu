import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';


export default class Shopsearchscreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.orangeRectangle}></View>
        <Text style={styles.header}>Notifications!</Text>
        <View style={styles.slantedBlueRectangle}></View>
        <View style={styles.slantedPurpleRectangle}></View>
        <View style={styles.whiteCard}></View>
        <Text style={styles.recentOrdersText}>Your recent orders...</Text>
        <Image source={require('./images/top_shopping_cart.png')}style={styles.topShopCart} />
        <Image source={require('./images/profile_head.png')}style={styles.profileHead} />
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
      fontSize: 70,
      color: '#fff',
      position: 'absolute',
      top: 80,
      textAlign: 'center',
      fontFamily: 'Arial',
    },
    slantedBlueRectangle: {
      position: 'absolute',
      backgroundColor: '#6DC4E0',
      transform:([{ rotateZ:'-5deg'}]),
      width: Dimensions.get("screen").width - 100,
      height: 80,
      top: Dimensions.get("screen").height/2 + 100,
    },
    slantedPurpleRectangle: {
      position: 'absolute',
      backgroundColor: '#6DC4E0',
      width: Dimensions.get("screen").width - 100,
      height: 80,
      top: Dimensions.get("screen").height/2 + 100,
    },
    whiteCard: {
      position: 'absolute',
      backgroundColor: '#ffffff',
      width: Dimensions.get("screen").width - 30,
      height: Dimensions.get("screen").height/2,
      top: Dimensions.get("screen").height/2 - 120,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 3,
      shadowOpacity: 0.9,
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
    },
    recentOrdersText: {
      fontSize: 50,
      position: 'absolute',
      color: '#fffff',
      top: Dimensions.get("screen").height/2 + 80,
      textAlign: 'center',
      fontFamily: 'Arial',

    }
});