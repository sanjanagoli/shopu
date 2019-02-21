import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class Welcome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.header}>shopU</Text>
        <View style={styles.RectangleShapeViewOne} />
        <View style={styles.RectangleShapeViewTwo} />
        <View style={styles.RectangleShapeViewThree} />
        <Text style = {styles.subheader}>sign up now!</Text>
        <View style={styles.RectangleShapeViewBottom} />
        <Text style = {styles.minitext}>Have an account? Login</Text>
        <Image source ={require('./images/shopcart.png')} style={styles.ShoppingCart} />
        <Image source ={require('./images/right-arrow.png')} style={styles.Arrow} />
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
  },
  header: {
    fontSize: 150,
    color:  '#fff',
    marginTop: 50,
    marginBottom: 5, 
    textAlign: 'center',
    fontFamily: 'Arial',
    width: 348,
    height: 174,
    top: -7,
    position: 'absolute',
  },
  subheader: {
    fontSize: 70,
    color:  '#fff',
    marginTop: 80,
    marginBottom: 5, 
    textAlign: 'left',
    fontFamily: 'Arial',
    fontWeight: '100',
    width: 235,
    height: 136,
    top: 270,
    left: 115, 
    position: 'absolute',
  },
  minitext: {
    fontSize: 24,
    color:  '#fff',
    marginTop: 80,
    marginBottom: 5, 
    textAlign: 'left',
    fontFamily: 'Arial',
    fontWeight: '200',
    width: 226,
    height: 52,
    top: 620,
    left: 126, 
    position: 'absolute',
  },
  RectangleShapeViewOne: {
    marginTop: 5,
    width: 259,
    height: 312.25,
    top: 239.65,
    borderRadius: 2,
    transform:([{ rotateZ:'-31.32deg'}]),
    backgroundColor: '#6DC4E0',
    position: 'absolute',
    },
  RectangleShapeViewTwo: {
    marginTop: 5,
    width: 349.89,
    height: 200,
    top: 299.41,
    borderRadius: 2,
    transform:([{ rotateZ:'-30.09deg'}]),
    backgroundColor: '#6DC4E0',
    position: 'absolute',
    },
  RectangleShapeViewThree: {
    marginTop: 5,
    width: 298,
    height: 251,
    top: 276.43,
    borderRadius: 2,
    transform:([{ rotateZ:'-31.23deg'}]),
    backgroundColor: '#605DF1',
    position: 'absolute',
    },
  RectangleShapeViewBottom: {
    marginTop: 5,
    width: '100%',
    height: 60,
    top: 675,
    left: 0,
    borderRadius: 2,
    backgroundColor: 'rgba(196, 196, 196, 0.46)',
    position: 'absolute',
    },
  ShoppingCart: {
    marginTop: 5,
    height: 60,
    width: 60,
    top: 412,
    left: 240,
    position: 'absolute',
    },
  Arrow: {
    marginTop: 5,
    height: 30,
    width: 30,
    top: 693,
    left: 350,
    position: 'absolute',
    },
});
