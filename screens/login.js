import React from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { Font } from 'expo';

const window = Dimensions.get("window")

export default class Login extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'Montserrat-Regular': require('./../assets/fonts/Montserrat-Regular.otf'),
      'Montserrat-Medium': require('./../assets/fonts/Montserrat-Medium.otf'),
      'Montserrat-SemiBold': require('./../assets/fonts/Montserrat-SemiBold.otf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View>
      {
        this.state.fontLoaded ? (
          <View style={styles.container}>
            <View style={styles.topBanner} />
            <Text style={styles.loginText}>Login</Text>
            <View style={styles.loginBox} />
            <Text style={styles.usernameText}>Username</Text>
            <View style={styles.usernameLine} />
            <Text style={styles.passwordText}>Password</Text>
            <View style={styles.passwordLine} />
            <View style={styles.rotatedBox} />
            <View style={styles.submitButton} />
            <Text style={styles.submitText}>Submit!</Text>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </View>
        ) : null
      }
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
  topBanner: {
    flexDirection: 'row',
    width: window.width,
    height: 300,
    backgroundColor: '#FF715B',
    position: 'absolute',
    top: 0
  },
  loginText: {
    fontSize: 80,
    fontFamily: 'Montserrat-SemiBold',
    color: '#fff',
    position: 'absolute',
    width: 347,
    height: 170,
    left: 13,
    top: 100,
    textAlign: 'center'
  },
  loginBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    position: 'absolute',
    width: 347,
    height: 370,
    left: 14,
    top: 250,
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  usernameText: {
    fontSize: 40,
    fontFamily: 'Montserrat-Regular',
    color: '#605DF1',
    position: 'absolute',
    width: 310,
    height: 101,
    left: 32,
    top: 267,
    textAlign: 'center'
  },
  usernameLine: {
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: '#6DC4E0',
    width: 274,
    height: 2,
    left: 50,
    top: 361
  },
  passwordText: {
    fontSize: 40,
    fontFamily: 'Montserrat-Regular',
    color: '#605DF1',
    position: 'absolute',
    width: 310,
    height: 101,
    left: 32,
    top: 428,
    textAlign: 'center'
  },
  passwordLine: {
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: '#6DC4E0',
    width: 274,
    height: 2,
    left: 50,
    top: 522
  },
  submitButton: {
    flexDirection: 'row',
    backgroundColor: '#605DF1',
    position: 'absolute',
    width: 261,
    height: 77,
    left: 57,
    top: 580
  },
  rotatedBox: {
    flexDirection: 'row',
    backgroundColor: '#6DC4E0',
    position: 'absolute',
    width: 250,
    height: 91,
    left: 65,
    top: 570,
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    transform: ([{rotate: '3.94deg'}]),
  },
  submitText: {
    fontSize: 36,
    fontFamily: 'Montserrat-SemiBold',
    color: '#fff',
    position: 'absolute',
    width: 189,
    height: 94,
    left: 94,
    top: 595,
    textAlign: 'center'
  },
  forgotText: {
    fontSize: 22,
    fontFamily: 'Montserrat-Medium',
    color: '#6DC4E0',
    position: 'absolute',
    width: 310,
    height: 70,
    left: 34,
    top: 740,
    textAlign: 'center'
  }
});
