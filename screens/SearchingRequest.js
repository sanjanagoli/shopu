import React from 'react';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator} from 'react-native';
import Toolbar from './../components/Toolbar';

export default class SearchingRequest extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.peachBox}>
            <Toolbar marginBottom={0}/>
            <View style={styles.format2}> 
              <View style={styles.whiteBox}>
                <Text style={styles.header}>Searching for Request</Text>
                <ActivityIndicator size='large' color="#605DF1" style={styles.loading}/>
              </View>
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
    
  },
  format2: {
    justifyContent: 'center',
    marginTop: Dimensions.get('screen').height*.15,
  },
  peachBox: {
    flexDirection: 'column',
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height*.60,
    backgroundColor: '#FF715B',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  whiteBox: {
    flexDirection: 'column',
    width: Dimensions.get("screen").width*.91,
    height: Dimensions.get("screen").height*.70,
    shadowColor: '#000000',
    shadowOffset: {
        width: 0,
        height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading:{
    marginTop: 50,
    width: 80,
    height: 80,
  },
  header:{
    color: '#605DF1',
    fontFamily: 'Montserrat-Medium',
    fontSize: 60,
    textAlign: 'center',
  }
});
