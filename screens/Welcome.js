import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import FontLoad from './../components/FontLoad';
import { AsyncStorage } from "react-native";


export default class Welcome extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarVisible: false,

    };


  login = () => {
    this.props.navigation.navigate('Login')
  }
  
  signUp = () => {
    this.props.navigation.navigate('SignUp')
  }

  componentWillMount = async () => {
    const self = this;
    const navigation = self.props.navigation;
    const userId = await AsyncStorage.getItem('userId');
    if (userId !== null) {
      navigation.navigate('ShopSearch')
    }
    FontLoad.then((res) => {
      this.setState({ fontLoaded: true });
    })
  }

  constructor(props) {
    super(props);
    this.state = {fontLoaded: false}
  }
    
  render() {
    return (
      this.state.fontLoaded ? (
      <View style={styles.container}>
        <View style={styles.RectangleShapeViewOne} />
        <View style={styles.RectangleShapeViewTwo} />
        <View style={styles.RectangleShapeViewThree} />
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginTop: Dimensions.get("screen").height * 0.31,}} onPress={this.signUp}>
        <Text style={styles.header}>mailU</Text>
        <Image style={styles.package} source={require('./../assets/images/mailU_package.png')} />
        </TouchableOpacity>
        <View style={styles.RectangleShapeViewBottom}>
          <TouchableOpacity style={{flexDirection: 'row'}} onPress={this.login}>
          <Text style={styles.minitext}>Have an account? Login</Text>
          <Image source={require('./../assets/images/right-arrow.png')} style={styles.Arrow} />
          </TouchableOpacity>
        </View>
      </View>
      ) : null
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  header: {
    color: '#383838',
    fontFamily: 'Montserrat-Medium',
    fontSize: 110,
    textAlign: 'center',
  },
  RectangleShapeViewOne: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height*0.26,
    top: Dimensions.get("screen").height*0.3,
    borderRadius: 2,
    transform:([{ rotateZ:'-30deg'}]),
    backgroundColor: '#19C6D1',
    position: 'absolute',
  },
  RectangleShapeViewTwo: {
    width: Dimensions.get("screen").width*0.74,
    height: Dimensions.get("screen").height*0.44,
    top: Dimensions.get("screen").height*0.215,
    borderRadius: 2,
    transform:([{ rotateZ:'-30deg'}]),
    backgroundColor: '#19C6D1',
    position: 'absolute',
  },
  RectangleShapeViewThree: {
    width: Dimensions.get("screen").width*0.89,
    height: Dimensions.get("screen").height*0.365,
    top: Dimensions.get("screen").height*0.25,
    borderRadius: 2,
    transform:([{ rotateZ:'-30deg'}]),
    backgroundColor: '#B3F0F4',
    position: 'absolute',
  },
  subheader: {
    fontSize: 70,
    color:  '#fff',
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
    marginTop: Dimensions.get("screen").height*0.22,
  },
  minitext: {
    fontSize: 24,
    color:  '#fff',
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
    marginLeft: Dimensions.get("screen").width*.13,
    marginRight: Dimensions.get("screen").width*.03,
  },
  RectangleShapeViewBottom: {
    width: '100%',
    height: Dimensions.get("screen").height*0.05,
    borderRadius: 2,
    backgroundColor: 'rgba(196, 196, 196, 0.96)',
    marginTop: Dimensions.get("screen").height*.27,
    flexDirection: 'row',
    alignItems: 'center',
  },
  package: {
    width: 100,
    height: 95,
  },
  Arrow: {
    height: 30,
    width: 30,
  },
});
