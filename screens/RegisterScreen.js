import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import PrimaryButton from './../components/primary_button.js';

export default class RegisterScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.peachBox}>
        <Text style={styles.header}>Register Now!</Text>
        <View style={styles.whiteBox}>
          <View marginTop={70}>
            <Text style={styles.subHeader}>Username</Text>
            <TextInput style={styles.textInput}></TextInput>
            <View style={styles.lineStyle}/>
          </View>
          <View>
            <Text style={styles.subHeader}>Password</Text>
            <TextInput style={styles.textInput}></TextInput>
            <View style={styles.lineStyle}/>
          </View>
          <View>
            <Text style={styles.subHeader}>Phone Number</Text>
            <TextInput style={styles.textInput}></TextInput>
            <View style={styles.lineStyle}/>
          </View>
          <View>
            <Text style={styles.subHeader}>Email</Text>
            <TextInput style={styles.textInput}></TextInput>
            <View style={styles.lineStyle}/>
          </View>
        <View/>
        <View>
          <PrimaryButton title={'Submit!'} backgroundColor={'#6DC4E0'} height={60} fontSize={40}/>
        </View>
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
  },
  peachBox: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height*.40,
    backgroundColor: '#FF715B',
    alignItems: 'center',
  },
  whiteBox: {
    flexDirection: 'column',
    width: Dimensions.get("screen").width*.91,
    height: Dimensions.get("screen").height*.58,
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
    marginTop: 50,
  },
  header: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 60,
    textAlign: 'center',
    marginTop: 70,
    justifyContent: 'center',
  },
  subHeader:{
    fontFamily: 'Arial',
    fontSize: 27,
    marginTop: 20,
    marginBottom: 10,
    color: '#605DF1',
  },
  textInput: {
    fontFamily: 'Arial',
    fontSize: 25,
    color: '#000000',
  },
  lineStyle: {
    width: 280,
    height: 3, 
    backgroundColor: '#605DF1', 
    marginBottom: 20,
  }
});
