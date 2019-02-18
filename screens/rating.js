import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import { Font } from 'expo';
import FontLoad from './components/FontLoad';

const window = Dimensions.get("window")

export default class Rating extends React.Component {
  state = {
    fontLoaded: false,
  };
  componentWillMount = () => {
    FontLoad.then((res) => {
      this.setState({ fontLoaded: true });
    })
  }

  stars = () => {
    let stars = [1, 2, 3, 4, 5]
    let starMap = stars.map((item) => {
      return (
        <View key={item}>
          <Image style={styles.starIcon}
              source={require('./images/star.png')} />
        </View>
      )
    })
    return starMap;
  }

  render() {
    return (
      <View>
      {
        this.state.fontLoaded ? (
          <View style={styles.container}>
            <View style={styles.topBanner} />
            <Image style={styles.shoppingCarticon}
                source={require('./images/shopping-cart.png')} />
            <Image style={styles.personIcon}
                source={require('./images/profile_person.png')} />
            <Text style={styles.thankYouforText}>Thank U for</Text>
            <Text style={styles.usingText}>using</Text>
            <Text style={styles.shopuText}>shopU!</Text>
            <View style={styles.ratingBox} />
            <Text style={styles.delivererText}>Deliverer:</Text>
            <View style={{width: 300, flexDirection: 'row', marginTop: 800, marginLeft: 185}}>
              {this.stars()}
              </View>
            <Text style={styles.timingText}>Timing:</Text>
            <View style={{width: 300, flexDirection: 'row', marginTop: 65, marginLeft: 185}}>
              {this.stars()}
              </View>
            <Text style={styles.productText}>Product Accuracy:</Text>
            <View style={{width: 300, flexDirection: 'row', marginTop: 65, marginLeft: 185}}>
              {this.stars()}
              </View>
            <Text style={styles.easeText}>Ease:</Text>
            <View style={{width: 300, flexDirection: 'row', marginTop: 65, marginLeft: 185}}>
              {this.stars()}
              </View>
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
    width: 45,
    height: 45,
    position: 'absolute',
    top: 40,
    left: 12
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
  delivererText: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    color: '#605DF1',
    position: 'absolute',
    width: 102,
    height: 25,
    left: 23,
    top: 305,
  },
  timingText: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    color: '#605DF1',
    position: 'absolute',
    width: 102,
    height: 28,
    left: 23,
    top: 375,
  },
  productText: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    color: '#605DF1',
    position: 'absolute',
    width: 105,
    height: 60,
    left: 23,
    top: 425,
  },
  easeText: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    color: '#605DF1',
    position: 'absolute',
    width: 105,
    height: 30,
    left: 23,
    top: 510,
  },
  starIcon: {
    width: 35,
    height: 35,
    marginHorizontal: 4
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
