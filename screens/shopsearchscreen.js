import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';


export default class Shopsearchscreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View> style={styles.orangeRectangle}</View>
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
    position: 'absolute',
    width: 377,
    height: 275,
    left: 0,
    top: 0,
    backgroundColor: '#FF175B',
  },

});

