import React from 'react';
import { StyleSheet, Text, View, Button, font } from 'react-native';

let backgroundColor;

export default class OrangeBackground extends React.Component {

  render() {
    return (
         <View style={[styles.peachBox]}></View>
    );
  }
}

const styles = StyleSheet.create({
  peachBox: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height*.40,
    backgroundColor: '#FF715B',
    alignItems: 'center',
  }
});
