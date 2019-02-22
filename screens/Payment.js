import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.orangeBox}>
                <View style={styles.formatInOrangeBox}>
                    <Image source ={require('./../assets/images/shopping-cart.png')} style={styles.ShoppingCart} />
                    <Image source ={require('./../assets/images/person.png')} style={styles.person} />  
                 </View>
                 <View style={styles.formatInOrangeBox}>
                    <Text style = {styles.header}>Shopping List</Text>
	            </View>
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
    justifyContent: 'center',
  },
  formatInOrangeBox: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: Dimensions.get('screen').width,
  },
  orangeBox: {
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
    width: 42,
    height: 38,
    marginRight: Dimensions.get("screen").width*.35,
    marginLeft: Dimensions.get("screen").width*.04,
    marginTop: Dimensions.get("screen").height*.05,
  },
  header: {
    fontSize: 50,
    color:  '#fff',
    textAlign: 'center',
    width: Dimensions.get("screen").width,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: Dimensions.get("screen").height*.05,
  },
});
