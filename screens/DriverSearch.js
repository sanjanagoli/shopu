import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import variables from './../assets/data/variables'
import OrangeBackground from './../components/OrangeBackground';
import PrimaryButton from '../components/PrimaryButton';
import Toolbar from '../components/Toolbar';

export default class DriverSearch extends React.Component {
  static navigationOptions = {
    header: null,
    };
    
  render() {
    return (
      <View style={styles.container}>
        <OrangeBackground/>
        <Toolbar/>
        <Text style={styles.header}>Let{`'`}s shopU!</Text>
        <View style={styles.whiteBox}>
          <Text style={styles.question}>Where are you going?</Text>
          <Text style={styles.question}>Drop-Off Locations?</Text>
        </View>
        <View style={styles.rectangleLBlue}/>
        <View style={{width: 290}}>
          <PrimaryButton backgroundColor={'#605DF1'} title={"Let's Go!"} height={55} fontSize={20}/>
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
  whiteBox: {
    flexDirection: 'column',
    width: Dimensions.get("screen").width*.91,
    height: Dimensions.get("screen").height*.55,
    shadowColor: '#000000',
    shadowOffset: {
        width: 0,
        height: 3
    },
    shadowRadius: 5,
    shadowOpacity: .8,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-around',
    //marginTop: Dimensions.get("screen").height*.01,
  },
  rectangleLBlue: {
    backgroundColor: '#6DC4E0',
    alignItems: 'center',
    justifyContent: 'center',
    width: 245,
    height: 60,
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    transform: ([{ rotateZ: '7.5deg' }]),
    //marginTop: -Dimensions.get('screen').height*.05,
  },
  header: {
    fontSize: 65,
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    width: Dimensions.get('screen').width,
    //marginTop: -Dimensions.get('screen').height*.06
  },
  question: {
    fontSize: 25,
    color: '#605DF1',
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontWeight: '100',
    //marginTop: -Dimensions.get('screen').height*.15,
  },
  lineStyleBottom: {
    borderWidth: 1,
    borderColor: '#6DC4E0',
    margin: 10,
    width: 303,
    height: 0,
    top: 100,
  },
});
