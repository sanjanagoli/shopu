import React from 'react';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator} from 'react-native';

export default class SearchingModal extends React.Component {
  static navigationOptions = {
    header: null,
    };
    
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.whiteBox}>
              <Text style={styles.header}>Searching for Request</Text>
              <ActivityIndicator size='large' color='#6DC4E0' style={styles.loading}/>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(92, 92, 92, 0.50)',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get("screen").height,
    width:Dimensions.get("screen").width,
  },
  whiteBox: {
    backgroundColor: '#fff',
    width:Dimensions.get("screen").width*.9,
    height: Dimensions.get("screen").height*.4,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    shadowOffset: { width: 0, height: Dimensions.get("screen").height*.005 },
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  header:{
    color: '#605DF1',
    fontFamily: 'Montserrat-Medium',
    fontSize: 30,
    textAlign: 'center',
  },
  loading:{
    width: 80,
    height: 80,
  },
});
