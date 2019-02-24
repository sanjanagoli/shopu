import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import OrangeBackground from './../components/OrangeBackground';


export default class Notifications extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <OrangeBackground/>
        <Text style={styles.header}>Notifications!</Text>
        <View style={styles.whiteCard}></View>
        <View style={styles.slantedBlueRectangle}></View>
        <View style={styles.slantedPurpleRectangle}></View>
        <Text style={styles.recentOrdersText}>Your recent orders...</Text>
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
    header: {
      fontSize: 65,
      color: '#fff',
      position: 'absolute',
      top: 135,
      textAlign: 'center',
      fontFamily: 'Arial',
    },
    slantedBlueRectangle: {
      position: 'absolute',
      backgroundColor: '#6DC4E0',
      transform:([{ rotateZ:'-5deg'}]),
      width: Dimensions.get("screen").width - 120,
      height: 80,
      top: Dimensions.get("screen").height * 1 / 3 - 25,
    },
    slantedPurpleRectangle: {
      position: 'absolute',
      backgroundColor: '#605DF1',
      width: Dimensions.get("screen").width -100,
      height: 70,
      top: Dimensions.get("screen").height * 1 / 3 - 20,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 2,
      shadowOpacity: 0.9,
    },
    whiteCard: {
      position: 'absolute',
      backgroundColor: '#ffffff',
      width: Dimensions.get("screen").width - 30,
      height: Dimensions.get("screen").height / 2 + 15,
      top: Dimensions.get("screen").height * 1 / 3 + 10,
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
      height: 40,
      width: 40,
    },
    profileHead: {
      position: 'absolute',
      top: 50,
      right: 20,
      height: 40,
      width: 40,
    },
    recentOrdersText: {
      fontSize: 30,
      position: 'absolute',
      color: '#ffffff',
      top: Dimensions.get("screen").height* 1 / 3 - 5,
      textAlign: 'center',
      fontFamily: 'Arial',

    }
});
