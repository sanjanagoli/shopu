import React from 'react';
import { StyleSheet, View, Dimensions, Image } from 'react-native';

export default class UserToolbar extends React.Component {
    render() {
      return (
           <View style={[styles.formatInBox, {marginBottom: this.props.marginBottom}]}>
              <Image source ={require('./../assets/images/scart.png')} style={styles.cart}/>
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
        marginTop: Dimensions.get('screen').height*.03,
    },
    person:{
        width: 43,
        height: 40,
        marginRight: 15,
    },
    cart:{
        width: 44,
        height: 40,
        marginLeft: 15,
    },
  });
