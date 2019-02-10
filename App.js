import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class App extends React.Component {
<<<<<<< HEAD
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
=======
  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.header}>shopU</Text>
        <View style={styles.RectangleShapeViewOne} />
        <View style={styles.RectangleShapeViewTwo} />
        <View style={styles.RectangleShapeViewThree} />
        <Text style = {styles.subheader}>sign up now!</Text>
      </View>
    );
  }
>>>>>>> beginning work on shapes and text for welcome screen
}



const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
=======
  container: {
    flex: 1,
    backgroundColor: '#FF715B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 100,
    color:  '#fff',
    marginTop: 80,
    marginBottom: 5, 
    textAlign: 'center',
    fontFamily: 'Arial',
    width: 348,
    height: 174,
    top: -6,
    position: 'absolute',
  },
  subheader: {
    fontSize: 55,
    color:  '#fff',
    marginTop: 80,
    marginBottom: 5, 
    textAlign: 'center',
    fontFamily: 'Arial',
    width: 235,
    height: 136,
    top: 285,
    left: 75, 
    position: 'absolute',
  },
  RectangleShapeViewOne: {
    marginTop: 20,
    width: 259,
    height: 312.25,
    top: 289.65,
    borderRadius: 2,
    transform:([{ rotateZ:'-31.32deg'}]),
    backgroundColor: '#6DC4E0',
    position: 'absolute',
    },
    RectangleShapeViewTwo: {
      marginTop: 20,
      width: 349.89,
      height: 200,
      top: 349.41,
      borderRadius: 2,
      transform:([{ rotateZ:'-30.09deg'}]),
      backgroundColor: '#6DC4E0',
      position: 'absolute',
      },
      RectangleShapeViewThree: {
        marginTop: 20,
        width: 298,
        height: 251,
        top: 326.43,
        borderRadius: 2,
        transform:([{ rotateZ:'-31.23deg'}]),
        backgroundColor: '#605DF1',
        position: 'absolute',
        }
});
>>>>>>> beginning work on shapes and text for welcome screen
