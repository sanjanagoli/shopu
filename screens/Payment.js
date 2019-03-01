import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Toolbar from './../components/Toolbar';

let data = [
  {
    requester: 'John Smith',
  },
  {
    venmo: 'John_Smith',
  },
  {
    charge: '$9.50',
  },
  {
    moneyToRecieve: '$2.50',
  }
]
  

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.orangeBox}/>
            <Toolbar/>
            <Text style = {styles.header}>Thank U for Shopping!</Text>
          <View style={styles.blueBox}>
            <Text style = {styles.boxText}>Requester: John Smith</Text>
           
            <Text style = {styles.boxText}>Requester Venmo: John_Smith</Text>
            <Text style = {styles.boxText}>Input total charge from store: $9.50</Text>
            <Text style = {styles.boxText}>Payment amount you will recieve: $2.50</Text>
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
  orangeBox: {
    position: 'absolute',
    zIndex: 0,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height*.50,
    backgroundColor: '#FF715B',
    alignItems: 'center',
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
    marginTop: Dimensions.get("screen").height*.04,
    marginLeft: Dimensions.get("screen").width*.03,
  }

});
