import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import { Font } from 'expo';

const window = Dimensions.get("window")

export default class Login extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.otf'),
      'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.otf'),
      'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.otf'),
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
            <Image style={styles.shoppingCarticon}
                source={require('/Users/nona/shopu/images/shopping-cart.png')} />
            <Image style={styles.personIcon}
                source={require('/Users/nona/shopu/images/profile_person.png')} />
            <Text style={styles.thankYouforText}>Thank U for</Text>
            <Text style={styles.usingText}>using</Text>
            <Text style={styles.shopuText}>shopU!</Text>
            <View style={styles.ratingBox} />
            <Image style={styles.ratingIcons}
                source={require('/Users/nona/shopu/images/rating_group.png')} />
            <View style={styles.rotatedBox} />
            <View style={styles.deliveryBox} />
            <Text style={styles.deliveryText}>Rate Your Delivery!</Text>
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
  topBanner: {
    flexDirection: 'row',
    width: window.width,
    height: 350,
    backgroundColor: '#FF715B',
    position: 'absolute',
    top: 0
  },
  shoppingCarticon: {
    width: 70,
    height: 67,
    position: 'absolute',
    top: 40,
    left: 10
  },
  personIcon: {
    width: 42,
    height: 40,
    position: 'absolute',
    top: 45,
    left: 310
  },
  thankYouforText: {
    fontSize: 45,
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
    position: 'absolute',
    width: 370,
    height: 130,
    left: 5,
    top: 115,
    textAlign: 'center'
  },
  usingText: {
    fontSize: 45,
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
    position: 'absolute',
    width: 370,
    height: 130,
    left: 20,
    top: 175,
  },
  shopuText: {
    fontSize: 45,
    fontFamily: 'Montserrat-SemiBold',
    color: '#fff',
    position: 'absolute',
    width: 370,
    height: 130,
    left: 175,
    top: 175,
  },
  ratingBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    position: 'absolute',
    width: 347,
    height: 389,
    left: 15,
    top: 280,
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  ratingIcons: {
    width: 331,
    height: 202,
    position: 'absolute',
    top: 325,
    left: 20
  },
  rotatedBox: {
    flexDirection: 'row',
    backgroundColor: '#6DC4E0',
    position: 'absolute',
    width: 330,
    height: 85,
    left: 20,
    top: 600,
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    transform: ([{rotate: '-6.23deg'}])
  },
  deliveryBox: {
    flexDirection: 'row',
    backgroundColor: '#605DF1',
    position: 'absolute',
    width: 355,
    height: 75,
    left: 10,
    top: 605
  },
  deliveryText: {
    fontSize: 30,
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
    position: 'absolute',
    width: 378,
    height: 51,
    top: 620,
    textAlign: 'center'
  }
});
