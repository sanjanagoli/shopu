import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

export default class ShoppingList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rectangleOrange}>
          <Text style = {styles.header}>Shopping List</Text>
          <View>
            <Image source ={require('./../assets/images/shopping-cart.png')} style={styles.ShoppingCart} />
            <Image source ={require('./../assets/images/person.png')} style={styles.person} />
          </View>
          <View style={styles.rectangleTop}>
            <Text style = {styles.TopBoxHeader}>Name</Text>
            <Text style = {styles.TopBoxSubHeader}>Time, Location</Text>
            <Text style = {styles.TopBoxSummary}>Shopping Cart Summary</Text>
            <Text style = {styles.TopBoxETA}>ETA: 2 hours</Text>
          </View>
          <View style={styles.rectangleMid}>
            <Text style = {styles.MidBoxHeader}>Name</Text>
            <Text style = {styles.MidBoxSubHeader}>Time, Location</Text>
            <Text style = {styles.MidBoxSummary}>Shopping Cart Summary</Text>
            <Text style = {styles.MidBoxETA}>ETA: 2 hours</Text>
          </View>
          <View style={styles.rectangleBottom}>
            <Text style = {styles.BottomBoxHeader}>Name</Text>
            <Text style = {styles.BottomBoxSubHeader}>Time, Location</Text>
            <Text style = {styles.BottomBoxSummary}>Shopping Cart Summary</Text>
            <Text style = {styles.BottomBoxETA}>ETA: 2 hours</Text>
          </View>
         
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
  rectangleOrange: {
    flex: 1,
    backgroundColor: '#FF715B',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get("screen").width,
    height: 320,
    position: 'relative',
    top: 0,
    borderRadius: 2,
  },
  rectangleTop: {
    flex: 1,
    backgroundColor: '#6DC4E0',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 345,
    height: 134,
    top: 190,
  },
  rectangleMid: {
    flex: 1,
    backgroundColor: '#605DF1',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 345,
    height: 134,
    top: 340,
  },
  rectangleBottom: {
    flex: 1,
    backgroundColor: '#6DC4E0',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 345,
    height: 134,
    top: 490,
  },
  header: {
    fontSize: 60,
    color:  '#fff',
    marginTop: 50,
    marginBottom: 5, 
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    fontWeight:'600',
    width: 419,
    height: 174,
    top: 60,
    position: 'absolute',
  },
  ShoppingCart: {
    marginTop: 5,
    height: 50,
    width: 50,
    bottom: '91.9%',
    position: 'absolute',
  },
  person: {
    marginTop: 5,
    height: 50,
    width: 50,
    top: '5%',
    bottom: '91.9%',
    position: 'absolute',
  },
  TopBoxHeader: {
    fontSize: 30,
    color:  '#fff',
    marginTop: 50,
    marginBottom: 5, 
    textAlign: 'left',
    fontFamily: 'Montserrat-SemiBold',
    fontWeight:'600',
    width: 419,
    height: 174,
    top: 150,
    
    position: 'absolute',
  },
  TopBoxSubHeader: {
    fontSize: 30,
    color:  '#fff',
    marginTop: 50,
    marginBottom: 5, 
    textAlign: 'left',
    fontFamily: 'Montserrat-SemiBold',
    fontWeight:'600',
    width: 419,
    height: 174,
    top: 180,
   
    position: 'absolute',
  },
  TopBoxSummary: {
    fontSize: 20,
    color:  '#fff',
    marginTop: 50,
    marginBottom: 5, 
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
    fontWeight:'600',
    width: 419,
    height: 174,
    top: 220,
  
    position: 'absolute',
  },
  TopBoxETA: {
    fontSize: 20,
    color:  '#fff',
    marginTop: 50,
    marginBottom: 5, 
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
    fontWeight:'600',
    width: 419,
    height: 174,
    top: 240,
   
    position: 'absolute',
  },
  MidBoxHeader: {
    fontSize: 30,
    color:  '#fff',
    marginTop: 50,
    marginBottom: 5, 
    textAlign: 'left',
    fontFamily: 'Montserrat-SemiBold',
    fontWeight:'600',
    width: 419,
    height: 174,
    top: 300,
  
    position: 'absolute',
  },
  MidBoxSubHeader: {
    fontSize: 30,
    color:  '#fff',
    marginTop: 50,
    marginBottom: 5, 
    textAlign: 'left',
    fontFamily: 'Montserrat-SemiBold',
    fontWeight:'600',
    width: 419,
    height: 174,
    top: 330,
    
    position: 'absolute',
  },
  MidBoxSummary: {
    fontSize: 20,
    color:  '#fff',
    marginTop: 50,
    marginBottom: 5, 
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
    fontWeight:'600',
    width: 419,
    height: 174,
    top: 370,
    
    position: 'absolute',
  },
  MidBoxETA: {
    fontSize: 20,
    color:  '#fff',
    marginTop: 50,
    marginBottom: 5, 
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
    fontWeight:'600',
    width: 419,
    height: 174,
    top: 390,
  
    position: 'absolute',
  },
  BottomBoxHeader: {
    fontSize: 30,
    color:  '#fff',
    marginTop: 50,
    marginBottom: 5, 
    textAlign: 'left',
    fontFamily: 'Montserrat-SemiBold',
    fontWeight:'600',
    width: 419,
    height: 174,
    top: 450,
 
    position: 'absolute',
  },
  BottomBoxSubHeader: {
    fontSize: 30,
    color:  '#fff',
    marginTop: 50,
    marginBottom: 5, 
    textAlign: 'left',
    fontFamily: 'Montserrat-SemiBold',
    fontWeight:'600',
    width: 419,
    height: 174,
    top: 480,

    position: 'absolute',
  },
  BottomBoxSummary: {
    fontSize: 20,
    color:  '#fff',
    marginTop: 50,
    marginBottom: 5, 
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
    fontWeight:'600',
    width: 419,
    height: 174,
    top: 520,
   
    position: 'absolute',
  },
  BottomBoxETA: {
    fontSize: 20,
    color:  '#fff',
    marginTop: 50,
    marginBottom: 5, 
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
    fontWeight:'600',
    width: 419,
    height: 174,
    top:540,
    position: 'absolute',
  },
});

