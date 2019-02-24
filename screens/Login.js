import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground} from 'react-native';

const window = Dimensions.get("window")

export default class Login extends React.Component {

  render() {
    return (
      <ImageBackground style={styles.container}
          source={require('./../assets/images/background.png')}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.loginText}>Login</Text>
              <View style={styles.loginBox}>
                  <Text style={styles.usernameText}>Username</Text>
                  <View style={styles.answerLine} />
                  <Text style={styles.passwordText}>Password</Text>
                  <View style={styles.answerLine} />
                  <View style={styles.rotatedBox}/>
                  <View style={styles.submitButton}>
                    <Text style={styles.submitText}>Submit!</Text>
                  </View>
              </View>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  loginText: {
    fontSize: 80,
    fontFamily: 'Montserrat-SemiBold',
    color: '#fff',
    marginTop: window.height*.12,
    marginBottom: window.height*.04,
    textAlign: 'center'
  },
  loginBox: {
    backgroundColor: '#fff',
    width: window.width*.9,
    height: window.height*.45,
    shadowOffset: { width: 0, height: window.height*.005 },
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    alignItems: 'center'
  },
  usernameText: {
    fontSize: 40,
    fontFamily: 'Montserrat-Regular',
    color: '#605DF1',
    textAlign: 'center',
    marginTop: window.height*.05,
  },
  answerLine: {
    backgroundColor: '#6DC4E0',
    width: window.width*.7,
    height: window.height*.002,
    marginTop: window.height*.07,
  },
  passwordText: {
    fontSize: 40,
    fontFamily: 'Montserrat-Regular',
    color: '#605DF1',
    textAlign: 'center',
    marginTop: window.height*.03,
  },
  submitButton: {
    backgroundColor: '#605DF1',
    width: window.width*.6,
    height: window.height*.1,
    marginTop: window.height*-.11,
    justifyContent: 'center',
    shadowOffset: { width: 0, height: window.height*.005 },
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  rotatedBox: {
    backgroundColor: '#6DC4E0',
    width: window.width *.55,
    height: window.height*.12,
    marginTop: window.height*.06,
    shadowOffset: { width: 0, height: window.height*.005 },
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    transform: ([{ rotate: '3.94deg' }]),
  },
  submitText: {
    fontSize: 36,
    fontFamily: 'Montserrat-SemiBold',
    color: '#fff',
    textAlign: 'center',
  },
  forgotText: {
    fontSize: 22,
    fontFamily: 'Montserrat-Medium',
    color: '#6DC4E0',
    textAlign: 'center',
    marginTop: window.height*.13
  }
});
