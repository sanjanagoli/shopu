import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.orangeBox}/>
          <View style={styles.toolbar}>
            <Image source ={require('./../assets/images/shopping-cart.png')} style={styles.ShoppingCart} />
            <Image source ={require('./../assets/images/person.png')} style={styles.person} />  
          </View>
            <Text style = {styles.header}>Thank U for Shopping!</Text>
          <View style={styles.blueBox}>
            <Text style = {styles.boxText}>Requester:</Text>
            <Text style = {styles.boxText}>Requester Venmo:</Text>
            <Text style = {styles.boxText}>Input total charge from store:</Text>
            <Text style = {styles.boxText}>Payment amount you will recieve:</Text>
          </View>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  toolbar: {
    height: 'auto',
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: Dimensions.get('screen').width,
  },
  orangeBox: {
    position: 'absolute',
    zIndex: 0,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height*.50,
    backgroundColor: '#FF715B',
    alignItems: 'center',
  },
  person:{
    width: 43,
    height: 40,
    marginLeft: Dimensions.get("screen").width*.35,
    marginRight: Dimensions.get("screen").width*.04,
    marginTop: Dimensions.get("screen").height*.05,
  },
  ShoppingCart:{
    width: 60,
    height: 60,
    marginRight: Dimensions.get("screen").width*.30,
    marginLeft: Dimensions.get("screen").width*.04,
    marginTop: Dimensions.get("screen").height*.05,
  },
  header: {
    fontSize: 50,
    color:  '#fff',
    textAlign: 'center',
    width: Dimensions.get("screen").width,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: Dimensions.get("screen").height*.02,
  },
  blueBox: {
    marginTop: Dimensions.get("screen").height*.04,
    width: Dimensions.get("screen").width* .9,
    height: Dimensions.get("screen").height*.50,
    backgroundColor: '#605DF1',
    alignItems: 'center',
  },
  boxText: {
    fontSize: 28,
    color:  '#fff',
    textAlign: 'left',
    width: Dimensions.get("screen").width*.9,
    fontFamily: 'Montserrat-Regular',
    marginTop: Dimensions.get("screen").height*.05,
    marginLeft: Dimensions.get("screen").width*.03,
  }

});
