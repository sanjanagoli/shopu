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
        <Toolbar pageType={'Driver'}/>
        <Text style={styles.header}>Let{`'`}s shopU!</Text>
        <View style={styles.whiteBox}>
          <Text style={styles.question}>Where are you going?</Text>
          <Image style={styles.downArrowIcon}
                        source={require('./../assets/images/Vector.png')} />
          <View style={styles.line}/>
          <Text style={styles.question}>Drop-Off Locations?</Text>
          <Image style={styles.downArrowIcon}
                        source={require('./../assets/images/Vector.png')} />
          <View style={styles.line}/>
        </View>
        <View style={styles.rectangleLBlue}/>
        <View style={{width: Dimensions.get("screen").width*.7, marginTop: -Dimensions.get("screen").height*.09}}>
          <PrimaryButton backgroundColor={'#605DF1'} title={"Let's Go!"} height={55} fontSize={30}/>
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
    height: Dimensions.get("screen").height*.45,
    shadowColor: '#000000',
    shadowOffset: {
        width: 0,
        height: 3
    },
    shadowRadius: 5,
    shadowOpacity: .8,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Dimensions.get("screen").height*.01,
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
    marginTop: -Dimensions.get('screen').height*.05,
  },
  header: {
    fontSize: 80,
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    width: Dimensions.get('screen').width,
  },
  question: {
    fontSize: 25,
    color: '#605DF1',
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontWeight: '100',
    marginBottom: Dimensions.get('screen').height*.05,
  },
  line: {
    borderWidth: 1.5,
    borderColor: '#6DC4E0',
    width: Dimensions.get('screen').width*0.8,
    marginTop: Dimensions.get('screen').height*0.01,
    marginBottom: Dimensions.get('screen').height*0.03,
  },
  downArrowIcon: {
    height: 30,
    width: 20,
    marginLeft: Dimensions.get('screen').width*0.7,
  }
});
