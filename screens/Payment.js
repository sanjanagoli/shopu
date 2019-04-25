import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Toolbar from '../components/Toolbar';

export default class Payment extends React.Component {
  static navigationOptions = {
    header: null,
    };

  render() {
    return (
      <View style={styles.container}>
            <Toolbar title={'Thank U!'} navigation={this.props.navigation}/>
          <View style={styles.whiteBox}>
            <Text style = {styles.boxText}>Final Price:</Text>
            <Text style = {styles.priceText}>$3.00</Text>
            <View style = {styles.boxStyle}>
              <Text style = {styles.boxText}>Requester:</Text>
              <Text style = {styles.nameText}>Ijemma</Text>
              <Text style = {styles.venmoText}>@ijemmao</Text> 
            </View>
          </View>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
  },
  whiteBox: {
    marginTop: Dimensions.get("screen").height*.07,
    width: Dimensions.get("screen").width* .9,
    height: Dimensions.get("screen").height*.60,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#19C6D1',
    justifyContent: 'center'
  },
  boxText: {
    fontSize: 32,
    color:  '#333232',
    textAlign: 'center',
    width: Dimensions.get("screen").width*.9,
    fontFamily: 'Montserrat-SemiBold',
  },
  priceText: {
    fontSize: 52,
    color:  '#333232',
    textAlign: 'center',
    width: Dimensions.get("screen").width*.9,
    fontFamily: 'Montserrat-Bold',
    marginTop: Dimensions.get('screen').height*.03
  },
  boxStyle:{
    marginTop: Dimensions.get("screen").height*.04,
  },
  nameText: {
    fontSize: 28,
    color:  '#333232',
    textAlign: 'center',
    width: Dimensions.get("screen").width*.9,
    fontFamily: 'Montserrat-Medium',
    marginTop: Dimensions.get('screen').height*.03
  },
  venmoText: {
    fontSize: 28,
    color:  '#333232',
    textAlign: 'center',
    width: Dimensions.get("screen").width*.9,
    fontFamily: 'Montserrat-Medium',
  },
});
