import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import PrimaryButton from './../components/PrimaryButton.js';
import OrangeBackground from './../components/OrangeBackground';


export default class Register extends React.Component {
  static navigationOptions = {
    header: null,
    };

    submit = () => {
      this.props.navigation.navigate('Notifications')
    }

  render() {
    return (
      <View>
        <OrangeBackground/>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.header}>Register Now!</Text>
          <View style={styles.whiteBox}>
            <View marginTop={Dimensions.get("screen").height*.1}>
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
            <PrimaryButton onPress={this.submit} title={'Submit!'} backgroundColor={'#6DC4E0'} height={Dimensions.get("screen").height*.08} fontSize={40}/>
          </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  whiteBox: {
    flexDirection: 'column',
    width: Dimensions.get("screen").width*.91,
    height: Dimensions.get("screen").height*.52,
    shadowOffset: { width: 0, height: window.height*.005 },
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Dimensions.get("screen").height*.01,
  },
  header: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 60,
    textAlign: 'center',
    marginTop: Dimensions.get("screen").height*.1,
    justifyContent: 'center',
  },
  subHeader:{
    fontFamily: 'Montserrat-Regular',
    fontSize: 27,
    marginBottom: Dimensions.get("screen").height*.01,
    color: '#605DF1',
  },
  textInput: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    color: '#605DF1',
  },
  lineStyle: {
    width: Dimensions.get("screen").width*.8,
    height: Dimensions.get("screen").height*.002, 
    backgroundColor: '#605DF1', 
    marginBottom: Dimensions.get("screen").height*.02,
  }
});
