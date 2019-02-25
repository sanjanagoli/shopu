import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, Dimensions, ImageBackground, TextInput} from 'react-native';
=======
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Font } from 'expo';
import OrangeBackground from './../components/OrangeBackground';
>>>>>>> 3dc7b07f53dc7f5efbfa2e5239470b68aa54bdd5

const window = Dimensions.get("window")

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: 'Type Here', password: 'Type Here'};
  }

  render() {
    return (
<<<<<<< HEAD
      <ImageBackground style={styles.container}
          source={require('./../assets/images/background.png')}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.loginText}>Login</Text>
              <View style={styles.loginBox}>
                  <Text style={styles.usernameText}>Username</Text>
                  <View style={styles.answerLine}>
                    <TextInput
                      style={styles.responseText}
                      onChangeText={(username) => this.setState({username})}
                      value={this.state.username}
                    />
                  </View>
                  <Text style={styles.passwordText}>Password</Text>
                  <View style={styles.answerLine}>
                    <TextInput
                      style={styles.responseText}
                      onChangeText={(password) => this.setState({password})}
                      value={this.state.password}
                    />
                  </View>
                  <View style={styles.rotatedBox}/>
                  <View style={styles.submitButton}>
                    <Text style={styles.submitText}>Submit!</Text>
                  </View>
              </View>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </View>
      </ImageBackground>
=======
      <View style={styles.container}>
        <OrangeBackground/>
        <Text style={styles.loginText}>Login</Text>
        <View style={styles.loginBox} />
        <Text style={styles.usernameText}>Username</Text>
        <View style={styles.usernameLine} />
        <Text style={styles.passwordText}>Password</Text>
        <View style={styles.passwordLine} />
        <View style={styles.submitButton} />
        <Text style={styles.submitText}>Submit!</Text>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </View>
>>>>>>> 3dc7b07f53dc7f5efbfa2e5239470b68aa54bdd5
    );
  }
}

const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    width: '100%',
    height: '100%',
=======
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
>>>>>>> 3dc7b07f53dc7f5efbfa2e5239470b68aa54bdd5
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
    borderBottomColor: '#6DC4E0',
    borderBottomWidth: 2, 
    width: window.width*.7, 
    marginTop: window.height*.03,
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
<<<<<<< HEAD
    textAlign: 'center',
    marginTop: window.height*.13
  },
  responseText: {
    fontSize: 18, 
    fontFamily: 'Montserrat-Regular', 
    color: '#605DF1', 
    textAlign: 'center',
  },
=======
    position: 'absolute',
    width: 310,
    height: 70,
    left: 34,
    top: 740,
    textAlign: 'center'
  }
>>>>>>> 3dc7b07f53dc7f5efbfa2e5239470b68aa54bdd5
});
