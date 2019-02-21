import React from 'react';
import { StyleSheet, View, Dimensions, Image } from 'react-native';

export default class PrimaryButton extends React.Component {
  
    render() {
      return (
           <View style={[styles.formatInBox, {marginBottom: this.props.marginBottom}, {marginTop: this.props.marginTop}]}>
              <Image source ={require('./../assets/images/shopping-bag.png')} style={styles.bag}/>
              <Image source ={require('./../assets/images/personicon.png')} style={styles.person}/>
           </View>
      );
    }
}

const styles = StyleSheet.create({
    formatInBox: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: Dimensions.get('screen').width,
        alignItems: 'center',
        height: 43,
        backgroundColor: '#FF715B',
    },
    person:{
        width: 43,
        height: 40,
        marginRight: 15,
    },
    bag:{
        width: 42,
        height: 38,
        marginLeft: 15,
    },
  });
