import React from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';

export default class OrangeBackground extends React.Component {

  render() {
    return (
         <View style={[styles.peachBox]} />
    );
  }
}

const styles = StyleSheet.create({
  peachBox: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height*.40,
    backgroundColor: '#FF715B',
    position: 'absolute',
    top: 0,
  }
});
