import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image} from 'react-native';

export default class Searching extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <Image source ={require('./../assets/images/shopping-bag.png')} style={styles.bag}/>
            <Image source ={require('./../assets/images/personicon.png')} style={styles.person}/>
            <View style={styles.peachBox}/>
            <View style={styles.whiteBox}>
                <Text style={styles.header}>Searching for Request</Text>
                <Image source ={require('./../assets/images/loading.png')} style={styles.loading}/>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  peachBox: {
    flex: 1,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height*.50,
    backgroundColor: '#FF715B',
    position: 'absolute',
    top: 0,
  },
  whiteBox: {
    zIndex: 1000,
    width: Dimensions.get("screen").width*.91,
    height: Dimensions.get("screen").height*.70,
    shadowColor: '#000000',
    shadowOffset: {
        width: 0,
        height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  person:{
    position: 'absolute',
    right: 0,
    top: Dimensions.get("screen").height*.05,
    width: 43,
    height: 40,
    zIndex: 10000,
  },
  bag:{
    position: 'absolute',
    left: 0,
    top: Dimensions.get("screen").height*.05,
    width: 42,
    height: 38,
    zIndex: 10000,
  },
  loading:{
    marginTop: 50,
    width: 85,
    height: 85,
    right: 5,
  },
  header:{
    color: '#605DF1',
    fontFamily: 'Montserrat-Medium',
    fontSize: 64,
    textAlign: 'center',
  }
});
