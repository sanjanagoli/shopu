import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import OrangeBackground from './../components/OrangeBackground';

export default class Completed extends React.Component {
  
    render() {
      return (
         <View style={styles.container}>
            <Image source ={require('./../assets/images/scart.png')} style={styles.cart} />
            <Image source ={require('./../assets/images/personicon.png')} style={styles.person} />
            <OrangeBackground/>
            <Text style={styles.header}>Your order has been placed!</Text>
            <View style={styles.purpleBox}/>
            <Text style={styles.subHeader}>Next Steps:</Text>
            <Text style={[styles.paragraphStyle, {top: 288}]}>Look for Notifications about your delivery on the Home Page</Text>
            <Text style={[styles.paragraphStyle, {top: 380}]}>Check your texts and calls for updates</Text>
            <Text style={[styles.paragraphStyle, {top: 470}]}>Venmo your deliverer your total once your order is completed!</Text>
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
  purpleBox: {
    flex: 1,
    zIndex: 1000,
    width: Dimensions.get("screen").width*.91,
    height: Dimensions.get("screen").height*.55,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 220,
    backgroundColor: '#605DF1',
   
  },
  header: {
    position: 'absolute',
    top: 95,
    fontSize: 40,
    fontFamily: 'Montserrat-SemiBold',
    justifyContent: 'center',
    width: Dimensions.get("screen").width,
    height: 186,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  subHeader:{
    width: 340,
    height: 370,
    zIndex: 10000,
    position: 'absolute',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 27,
    top: 225,
    color: '#FFFFFF',
  },
  cart:{
    right: 125,
    position: 'absolute',
    top: 24,
    width: 50,
    height: 45,
    zIndex: 10000,
  },
  person:{
    position: 'absolute',
    top: 24,
    left: 120,
    width: 50,
    height: 45,
    zIndex: 10000,
  },
  paragraphStyle: {
    zIndex: 100000, 
    position: 'absolute', 
    width: 330, 
    fontFamily: 'Montserrat-Regular', 
    fontSize: 22, 
    color: '#FFFFFF', 
  },
});
