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
    width: Dimensions.get("screen").width+1,
    height: Dimensions.get("screen").height*.48,
    backgroundColor: '#FF715B',
    position: 'absolute',
    top: 0,
  }
});
