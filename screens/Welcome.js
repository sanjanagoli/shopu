import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';


export default class Welcome extends React.Component {
  static navigationOptions = {
    header: null,
    };
    
  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.header}>shopU</Text>
        <View style={styles.RectangleShapeViewOne} />
        <View style={styles.RectangleShapeViewTwo} />
        <View style={styles.RectangleShapeViewThree} />
        <Text style = {styles.subheader}>sign up now!</Text>
        <Image source ={require('./../assets/images/shopcart.png')} style={styles.ShoppingCart} />
        <View style={styles.RectangleShapeViewBottom}>
          <Text style = {styles.minitext}>Have an account? Login</Text>
          <Image source ={require('./../assets/images/right-arrow.png')} style={styles.Arrow} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF715B',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  header: {
    color: '#ffffff',
    fontFamily: 'Montserrat-Medium',
    fontSize: 110,
    textAlign: 'center',
    marginTop: Dimensions.get("screen").height*0.05,
  },
  RectangleShapeViewOne: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height*0.26,
    top: Dimensions.get("screen").height*0.4,
    borderRadius: 2,
    transform:([{ rotateZ:'-30deg'}]),
    backgroundColor: '#6DC4E0',
    position: 'absolute',
  },
  RectangleShapeViewTwo: {
    width: Dimensions.get("screen").width*0.74,
    height: Dimensions.get("screen").height*0.44,
    top: Dimensions.get("screen").height*0.315,
    borderRadius: 2,
    transform:([{ rotateZ:'-30deg'}]),
    backgroundColor: '#6DC4E0',
    position: 'absolute',
  },
  RectangleShapeViewThree: {
    width: Dimensions.get("screen").width*0.89,
    height: Dimensions.get("screen").height*0.365,
    top: Dimensions.get("screen").height*0.35,
    borderRadius: 2,
    transform:([{ rotateZ:'-30deg'}]),
    backgroundColor: '#605DF1',
    position: 'absolute',
  },
  ShoppingCart: {
    height: 60,
    width: 60,
    marginTop: -Dimensions.get("screen").height*0.08,
    marginLeft: Dimensions.get("screen").width*0.37,
  },
  Arrow: {
    height: 30,
    width: 30,
  },
  subheader: {
    fontSize: 70,
    color:  '#fff',
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
    marginTop: Dimensions.get("screen").height*0.25,
  },
  minitext: {
    fontSize: 24,
    color:  '#fff',
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
    marginLeft: Dimensions.get("screen").width*.13,
    marginRight: Dimensions.get("screen").width*.03,
  },
  RectangleShapeViewBottom: {
    width: '100%',
    height: Dimensions.get("screen").height*0.05,
    borderRadius: 2,
    backgroundColor: 'rgba(196, 196, 196, 0.46)',
    marginTop: Dimensions.get("screen").height*.25,
    flexDirection: 'row',
    alignItems: 'center',
  },

});
