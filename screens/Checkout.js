import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

export default class Checkout extends React.Component {
  render() {
    return (
    <View style={styles.whiteBackground}> 
        <View style={styles.orangeCard} />
        <View style={styles.iconsBox}>
          <Image source ={require('./../assets/images/personicon.png')} style={styles.personIcon}/>
        </View>
    </View>


      )
    }
};

const styles = StyleSheet.create({
    whiteBackground: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    orangeCard: {
      backgroundColor: '#FF715B',
      alignItems: 'center',
      position: 'absolute',
      justifyContent: 'center',
      width: Dimensions.get("screen").width,
      height: Dimensions.get('screen').height * 7 / 16,
      top: 0,
    },
    iconsBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    personIcon: {
      width: 40,
      height: 40,  
      marginLeft: 10,
    },
});

