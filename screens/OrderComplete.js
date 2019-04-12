import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import OrangeBackground from './../components/OrangeBackground';
import Toolbar from '../components/Toolbar';


export default class OrderComplete extends React.Component {
  static navigationOptions = {
    header: null,
    };
    
    render() {
      return (
        <View style={styles.container}>
        <OrangeBackground/>
        <Toolbar navigation={this.props.navigation}/>
        <Text style={styles.header}>Your mail has been requested!</Text>
        <View style={styles.rectangle}/>
          <Text style={styles.subHeader}>Next Steps:</Text>
          <View style={styles.textBox}>
            <Image source ={require('./../assets/images/white_circle.png')} style={styles.circle}/>
            <Text style={styles.line}>Wait to get an SMS for further details on order pickup</Text>
          </View>
          <View style={styles.textBox}>
            <Image source ={require('./../assets/images/white_circle.png')} style={styles.circle}/>
            <Text style={styles.line}>Venmo your deliverer your total once your order is completed!</Text>
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
  header: {
    color: '#ffffff',
    fontFamily: 'Montserrat-Medium',
    fontSize: 50,
    textAlign: 'center',
    marginTop: Dimensions.get('screen').height*0.05,
    marginBottom: Dimensions.get('screen').height*0.05,
  },
  subHeader:{
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 27,
    marginTop: -Dimensions.get('screen').height*0.47,
    color: '#fff',
    marginLeft: -Dimensions.get("screen").width*.4,
  },
  rectangle: {
    flexDirection: 'column',
    width: Dimensions.get("screen").width*.91,
    height: Dimensions.get("screen").height*.50,
    backgroundColor: '#605DF1',
  },
  textBox: {
    flexDirection: 'row',
    width: Dimensions.get("screen").width*.82,
    textAlign: 'left',
  },
  line: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 24,
    color: '#fff',
    marginTop: Dimensions.get("screen").height*.03,
  },
  circle: {
    width: 20,
    height: 17,
    marginRight: Dimensions.get("screen").width*.01,
    marginTop: Dimensions.get("screen").height*.038,
  }
});
