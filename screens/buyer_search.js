import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

export default class buyer_search extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rectangleOrange} />
        <View style={styles.rectangleWhite} />
        <View style={styles.rectangleLBlue} />
        <View style={styles.rectangleDBlue} />
        <Text style = {styles.header}>Let's{"\n"}shopU!</Text>
        <Text style = {styles.QWhere}>Where are you going?</Text>
        <Text style = {styles.QDropOff}>Drop-Off Locations?</Text>
        <Text style = {styles.LetsGo}>Let{ `'` }s Go!</Text>
        <Image source ={require('./assets/images/shopping-cart.png')} style={styles.ShoppingCart} />
        <Image source ={require('./assets/images/person.png')} style={styles.person} />
        <View style = {styles.lineStyleTop} />
        <View style = {styles.lineStyleBottom} />
        <Image source ={require('./assets/images/Vector.png')} style={styles.vectorTop} />
        <Image source ={require('./assets/images/Vector.png')} style={styles.vectorBottom} />
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
  rectangleOrange: {
    flex: 1,
    backgroundColor: '#FF715B',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: Dimensions.get("screen").width,
    height: 320,
    left: 0,
    top: 0,
    borderRadius: 2,
  },
  rectangleWhite: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 347,
    height: 300,
    left: 33,
    top: 270,
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 5},
    shadowColor: 'rgba(0, 0, 0, 0.25)',
  },
  rectangleLBlue: {
    flex: 1,
    backgroundColor: '#6DC4E0',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 252,
    height: 84,
    left: 80,
    top: 540,
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: {width: 5, height: 25},
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    transform:([{ rotateZ:'5deg'}]),
  },
  rectangleDBlue: {
    flex: 1,
    backgroundColor: '#605DF1',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 261,
    height: 77,
    left: 75,
    top: 545,
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: {width: 5, height: 25},
    shadowColor: 'rgba(0, 0, 0, 0.25)',
  },
  header: {
    fontSize: 90,
    color:  '#fff',
    marginTop: 50,
    marginBottom: 5, 
    textAlign: 'center',
    fontFamily: 'Arial',
    fontWeight:'600',
    width: 419,
    height: 174,
    top: 30,
    position: 'absolute',
  },
  QWhere: {
    fontSize: 30,
    color:  '#605DF1',
    marginTop: 50,
    marginBottom: 5, 
    textAlign: 'center',
    fontFamily: 'Arial',
    fontWeight:'100',
    width: 300,
    height: 30,
    top: 270,
    position: 'absolute',
  },
  QDropOff: {
    fontSize: 30,
    color:  '#605DF1',
    marginTop: 50,
    marginBottom: 5, 
    textAlign: 'center',
    fontFamily: 'Arial',
    fontWeight:'100',
    width: 300,
    height: 30,
    top: 380,
    position: 'absolute',
  },
  LetsGo: {
    fontSize: 38,
    color:  '#fff',
    marginTop: 50,
    marginBottom: 5, 
    textAlign: 'center',
    fontFamily: 'Arial',
    fontWeight:'500',
    width: 300,
    height: 30,
    top: 515,
    position: 'absolute',
  },
  ShoppingCart: {
    marginTop: 5,
    height: 50,
    width: 50,
    top: '5%',
    left: '3.73%',
    bottom: '91.9%',
    position: 'absolute',
  },
  person: {
    marginTop: 5,
    height: 50,
    width: 50,
    top: '5%',
    left: '83%',
    bottom: '91.9%',
    position: 'absolute',
  },
  lineStyleTop:{
    borderWidth: 1,
    borderColor:'#6DC4E0',
    margin:10,
    width: 303,
    height: 0,
    left: 0,
    top: 30,    
},
lineStyleBottom:{
  borderWidth: 1,
  borderColor:'#6DC4E0',
  margin:10,
  width: 303,
  height: 0,
  left: 0,
  top: 120,    
},
vectorTop: {
  marginTop: 0,
  height: 20,
  width: 20,
  top: '49%',
  left: '80%',
  position: 'absolute',
},
vectorBottom: {
  marginTop: 0,
  height: 20,
  width: 20,
  top: '64%',
  left: '80%',
  position: 'absolute',
 
},
});
