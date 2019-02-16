import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import { Font } from 'expo';

export default class Completed extends React.Component {
    state = {
      fontLoaded: false,
    };
    async componentDidMount() {
      await Font.loadAsync({
        'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.otf'),
        'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.otf'),
      });
      this.setState({ fontLoaded: true });
    }

    render() {
      return (
        <View>
        {
          this.state.fontLoaded ? (
            <View style={styles.container}>
              <Image source ={require('./images/scart.png')} style={styles.cart} />
              <Image source ={require('./images/personicon.png')} style={styles.person} />
              <View style={styles.peachBox}/>
              <Text style={styles.header}>Your order has been placed!</Text>
              <View style={styles.purpleBox}/>
              <Text style={styles.subHeader}>Next Steps:</Text>
              <Text style={styles.paragraph1}>Look for Notifications about your delivery on the Home Page</Text>
              <Text style={styles.paragraph2}>Check your texts and calls for updates</Text>
              <Text style={styles.paragraph3}>Venmo your deliverer your total once your order is completed!</Text>
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
  },
  peachBox: {
    flex: 1,
    width: Dimensions.get("screen").width,
    height: 300,
    backgroundColor: '#FF715B',
    position: 'absolute',
    top: 0,
  },
  purpleBox: {
    flex: 1,
    zIndex: 1000,
    width: 340,
    height: 370,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 220,
    backgroundColor: '#605DF1',
   
  },
  header: {
    position: 'absolute',
    top: 95,
    fontSize: 40,
    fontFamily: 'Montserrat-SemiBold',
    justifyContent: 'center',
    width: Dimensions.get("screen").width,
    height: 186,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  subHeader:{
    left: 25,
    zIndex: 10000,
    position: 'absolute',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 27,
    top: 225,
    color: '#FFFFFF',
  },
  paragraphStyle:{
    left: 25,
    position: 'absolute',
    width: 330,
    fontFamily: 'Montserrat-Regular',
    fontSize: 22,
    top: 280,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  cart:{
    position: 'absolute',
    top: 24,
    left: 10,
    width: 50,
    height: 45,
    zIndex: 10000,
  },
  person:{
    position: 'absolute',
    top: 24,
    right: 10,
    width: 50,
    height: 45,
    zIndex: 10000,
  },
  paragraph1: {
    left: 25, 
    zIndex: 100000, 
    position: 'absolute', 
    width: 330, 
    fontFamily: 'Montserrat-Regular', 
    fontSize: 22, 
    color: '#FFFFFF', 
    top: 280,
  },
  paragraph2: {
    left: 25, 
    zIndex: 100000, 
    position: 'absolute', 
    width: 330, 
    fontFamily: 'Montserrat-Regular', 
    fontSize: 22, 
    color: '#FFFFFF', 
    top: 388,
  },
  paragraph3: {
    left: 25, 
    zIndex: 100000, 
    position: 'absolute', 
    width: 330, 
    fontFamily: 'Montserrat-Regular', 
    fontSize: 22, 
    color: '#FFFFFF', 
    top: 470,
  }
});