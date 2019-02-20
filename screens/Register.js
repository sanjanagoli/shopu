import React from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';

export default class Register extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View>
            <Text style={styles.subHeader}>Username</Text>
            <View style={styles.lineStyle}/>
          </View>
          <View>
            <Text style={styles.subHeader}>Password</Text>
            <View style={styles.lineStyle}/>
          </View>
          <View>
            <Text style={styles.subHeader}>Phone Number</Text>
            <View style={styles.lineStyle}/>
          </View>
          <View>
            <Text style={styles.subHeader}>Email</Text>
            <View style={styles.lineStyle}/>
          </View>
        </View>
         <View style={styles.purpleBox}/>
         <View style={styles.blueBox}/>
         <Text style={styles.header}>Register Now</Text>
         <View style={styles.submitButton}/>
         <Text style={styles.submitText}>Submit!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  purpleBox: {
    flex: 1,
    width: Dimensions.get("screen").width,
    height: 172,
    backgroundColor: '#605DF1',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
  },
  blueBox: {
    flex: 1,
    width: 490,
    height: 136,
    position: 'absolute',
    left: -20,
    top: 10,
    backgroundColor: '#64B6F2',
    transform: [{rotateZ: '-6.5deg'}],
  },
  header: {
    position: 'absolute',
    top: 16.5,
    fontSize: 62.5,
    fontFamily: 'Arial',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    width: Dimensions.get("screen").width,
    height: 186,
    color: '#fff',
  },
  subHeader:{
    left: 30,
    fontFamily: 'Arial',
    fontSize: 27,
    marginBottom: 55,
    top: 190,
    color: '#605DF1',
  },
  lineStyle: {
    width: 280,
    height: 3, backgroundColor: '#6DC4E0', 
    top: 180, 
    marginBottom: 10,
    left: 40,
  },
  submitButton: {
      position:'absolute',
      width: 240,
      height: 65,
      left: 40,
      top: 590,
      marginLeft:30,
      marginRight:30,
      backgroundColor:'#FF715B',
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 5,
      shadowOpacity: 1.0
  },
  submitText: {
    position: 'absolute',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    top: 605,
    left: 137,
    fontSize: 30,
    fontFamily: 'Arial',
    color: '#FFFFFF',
    fontWeight: 'bold',
  }
});
