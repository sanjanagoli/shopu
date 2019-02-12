import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Font } from 'expo';


export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'Montserrat-Regular': require('/Users/nona/shopu/assets/Montserrat-Regular.otf'),
      'Montserrat-Medium': require('/Users/nona/shopu/assets/Montserrat-Medium.otf'),
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
    fontFamily: 'Montserrat-Regular',
  },
  topBanner: {
    flexDirection: 'row',
    width: 400,
    height: 300,
    backgroundColor: '#FF715B',
    position: 'absolute',
    left: 0,
    top: -2
  },
  loginText: {
    fontSize: 80,
    fontFamily: 'Montserrat-Medium',
    fontWeight: '300',
    color: '#fff',
    position: 'absolute',
    width: 347,
    height: 170,
    left: 13,
    top: 115,
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
    borderRadius: 25,
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  usernameText: {
    fontSize: 40,
    fontWeight: '200',
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
    fontWeight: '200',
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
    top: 580,
    borderRadius: 50,
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  submitText: {
    fontSize: 36,
    fontFamily: 'Montserrat-Medium',
    fontWeight: '200',
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
    fontWeight: '200',
    color: '#6DC4E0',
    position: 'absolute',
    width: 310,
    height: 70,
    left: 34,
    top: 740,
    textAlign: 'center'
  }
});
