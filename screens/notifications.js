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
        <View style={styles.searchLine}></View>
        <Text style={styles.searchText}>     Search for a Product</Text>
        <Image source={require('./images/search_icon.png')}style={styles.searchIcon} />
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
    }

    


    
  









});