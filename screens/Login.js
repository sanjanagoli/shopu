import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, Image} from 'react-native';
import Toolbar from '../components/Toolbar';
import PrimaryButton from './../components/PrimaryButton';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { setUser } from '../reducers/completedReducer';
import { AsyncStorage } from "react-native";

class Login extends React.Component {
  static navigationOptions = {
    header: null,
    };

  constructor(props) {
    super(props)
    this.state = { email: '', password: ''};
  }

  goBack = () => {
    this.props.navigation.navigate('Welcome')
  }

  loginUser = () => {
    const navigation = this.props.navigation;
    const self = this;
    var fireBaseResponse = firebase.database().ref('users/');
    fireBaseResponse.on("value", function(querySnapshot) {
        querySnapshot.forEach(function(userSnapshot) {
          if (userSnapshot.val().email === self.state.email & userSnapshot.val().password === self.state.password) {
            firebase.database().ref('users/' + userSnapshot.key).update({
              loggedIn: true,
            })
            AsyncStorage.setItem('userId', userSnapshot.key)
            self.props.setUser(userSnapshot.key)
            navigation.navigate('ShopSearch'); 
        }
        });
    });
  }
   
  render() {
    return (
          <View style={styles.container}>
            <Toolbar title={'Login'} pageType={'Profile'} />
            <TouchableOpacity style={styles.subView} onPress={this.goBack}>
              <Image style={styles.arrowIcon}
                source={require('./../assets/images/left-arrow.png')} />
              <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <View style={styles.whiteBox}>
              <View>
                <View style={styles.textIcon}>
                  <TextInput style={styles.subHeader}
                    placeholder={'Email'}
                    placeholderTextColor={'#2E2E2F'}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}>
                  </TextInput>
                  <View style={styles.lineStyle} />
                </View>
                <View style={styles.textIcon}>
                  <TextInput style={styles.subHeader}
                    placeholder={'Password'}
                    placeholderTextColor={'#2E2E2F'}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}>
                  </TextInput>
                  <View style={styles.lineStyle} />
                </View>
              </View>
              <View style={{ alignItems: 'center' }}>
                <View style={styles.buttonStyle}>
                  <PrimaryButton onPress={this.loginUser} backgroundColor={'#19C6D1'} height={60} title={'Login!'} fontSize={28} />
                </View>
              </View>
            </View>
          </View>
    );
  }
}
const mapStateToProps = state => ({
  userId: state.user,
});

const mapDispatchToProps = {
  setUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    alignItems: 'flex-start',
  },
  backText: {
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    color: '#262626',
    marginLeft: Dimensions.get("screen").width * .01,
    marginTop: -Dimensions.get("screen").height * .006,
  },
  arrowIcon: {
    width: 20,
    height: 10,
  },
  subView: {
    flexDirection: 'row',
    paddingHorizontal: Dimensions.get("screen").width * .05,
    marginTop: Dimensions.get("screen").height * .03
  },
  whiteBox: {
    flexDirection: 'column',
    width: Dimensions.get("screen").width * .91,
    height: Dimensions.get("screen").height * .4,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    marginTop: Dimensions.get("screen").height * .05,
    marginLeft: Dimensions.get("screen").width * .045,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#19C6D1',
  },
  textIcon: {
    marginBottom: Dimensions.get("screen").height * .03,
    marginTop: Dimensions.get('screen').height * .065,
  },
  subHeader: {
    color: '#2E2E2F',
    fontFamily: 'Montserrat-Medium',
    fontSize: 22,
    marginLeft: Dimensions.get('screen').width * 0.05,
    marginTop: Dimensions.get("screen").height * .02,
  },
  lineStyle: {
    width: Dimensions.get('screen').width * .7,
    height: 1,
    backgroundColor: '#2E2E2F',
    marginLeft: Dimensions.get('screen').width * 0.05,
  },
  buttonStyle: {
    marginTop: Dimensions.get('screen').height * .07,
    width: Dimensions.get('screen').width * .6,
  },
});
