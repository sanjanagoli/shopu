import React from 'react';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator} from 'react-native';
import OrangeBackground from './../components/OrangeBackground';

const window = Dimensions.get("window")

export default class LoadingScreen extends React.Component {
  static navigationOptions = {
    header: null,
    };

  render() {
    return (
        <View style={styles.container}>
            <OrangeBackground/>
            <View style={styles.mainView}>
                <Text style={styles.matchText}>Waiting for a Match!</Text>
                <View style={styles.blueBox}>
                    <ActivityIndicator size='large' color='#FF715B'/>
                </View>
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
    justifyContent: 'center',
    height: Dimensions.get("screen").height,
    width:Dimensions.get("screen").width,
  },
  mainView: {
    justifyContent: 'center',
    alignItems: 'center', 
  },
  matchText: {
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 45
  },
  blueBox: {
    backgroundColor: '#6DC4E0',
    width:Dimensions.get("screen").width*.9,
    height: Dimensions.get("screen").height*.4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: Dimensions.get("screen").height*.005 },
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    marginTop: window.height*.05
  },
  header:{
    color: '#605DF1',
    fontFamily: 'Montserrat-Medium',
    fontSize: 30,
    textAlign: 'center',
  },
});
