import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ActivityIndicator} from 'react-native';
import OrangeBackground from './../components/OrangeBackground';

export default class SearchingRequest extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <OrangeBackground/>
            <View style={styles.formatInPeachBox}>
              <Image source ={require('./../assets/images/shopping-bag.png')} style={styles.bag}/>
              <Image source ={require('./../assets/images/personicon.png')} style={styles.person}/> 
            </View>
            <View style={styles.whiteBox}>
              <Text style={styles.header}>Searching for Request</Text>
              <ActivityIndicator size='large' color="#605DF1" style={styles.loading}/>
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
  },
  formatInPeachBox: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: Dimensions.get('screen').width,
  },
  whiteBox: {
    flexDirection: 'column',
    width: Dimensions.get("screen").width*.91,
    height: Dimensions.get("screen").height*.70,
    shadowColor: '#000000',
    shadowOffset: {
        width: 0,
        height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Dimensions.get("screen").height*.05,
  },
  person:{
    width: 43,
    height: 40,
    marginRight: 15,
    marginTop: Dimensions.get("screen").height*.05,
  },
  bag:{
    width: 42,
    height: 38,
    marginLeft: 15,
    marginTop: Dimensions.get("screen").height*.05,
  },
  loading:{
    marginTop: 50,
    width: 80,
    height: 80,
  },
  header:{
    color: '#605DF1',
    fontFamily: 'Montserrat-Medium',
    fontSize: 60,
    textAlign: 'center',
  }
});
