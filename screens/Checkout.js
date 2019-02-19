import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

export default class Checkout extends React.Component {
  render() {
    return (
    <View> 
        <View> style={StyleSheet.whiteBackground} </View>
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
    }
});
