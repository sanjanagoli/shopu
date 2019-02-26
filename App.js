import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native';
import FontLoad from './components/FontLoad';
import CTAbutton from './components/CTAbutton';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    }
  }

  componentWillMount = () => {
    FontLoad.then((res) => {
      this.setState({ fontLoaded: true });
    })
  }

  render() {
    return (
      
      this.state.fontLoaded ? (
        <View style={styles.container}>
	        <CTAbutton backgroundColor={'#605DF1'} title={'Submit!'} height={40}/>
	      </View>
    ) : null
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


=======
import { StyleSheet, Text, View, Image, YellowBox} from 'react-native';
import FontLoad from './components/FontLoad';
import { createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import Checkout from './screens/Checkout';
import DriverSearch from './screens/DriverSearch';
import Login from './screens/Login';
import Notifications from './screens/Notifications';
import Completed from './screens/OrderComplete';
import Rating from './screens/Rating';
import Register from './screens/Register';
import RequestProfile from './screens/RequestProfile';
import SearchingRequest from './screens/SearchingRequest';
import ShoppingList from './screens/ShoppingList';
import ShopSearch from './screens/ShopSearch';
import Welcome from './screens/Welcome';
import YourCart from './screens/YourCart';

YellowBox.ignoreWarnings([
  'Require cycle:',
]);

FontLoad.then((res) => {
 })

const shopStackNavigator = createStackNavigator({
  ShopSearch: {
    screen: ShopSearch
  },
  YourCart: {
    screen: YourCart
  },
  Checkout: {
    screen: Checkout
  },
  OrderComplete: {
    screen: Completed
  },
  Rating: {
    screen: Rating
  },
});

const driverStackNavigator = createStackNavigator({
  DriverSearch: {
    screen: DriverSearch
  },
  SearchingRequest: {
    screen: SearchingRequest
  },
  RequestProfile: {
    screen: RequestProfile
  },
  ShoppingList: {
    screen: ShoppingList
  },
  Rating: {
    screen: Rating
  },
});

const TabNavigator = createBottomTabNavigator({
  ShopSearch: shopStackNavigator,
  Notifications: Notifications,
  DriverSearch: driverStackNavigator,
},
{
defaultNavigationOptions: ({ navigation }) => ({
  tabBarIcon: ({ focused }) => {
    const { routeName } = navigation.state;
    let imageName;
    if (routeName === 'ShopSearch') {
      imageName = require('./assets/images/nav-cart.png');
      if (focused) {
        imageName = require('./assets/images/filled_cart.png');
      }
    } else if (routeName === 'Notifications') {
      imageName = require('./assets/images/home_icon.png');
      if (focused) {
        imageName = require('./assets/images/filled_house.png');
      }
    } else if (routeName === 'DriverSearch') {
      imageName = require('./assets/images/person_w_bag.png');
      if (focused) {
        imageName = require('./assets/images/filled_person.png');
      }
    } 
    return <Image source={imageName} style={{width: 46, height: 42.99, marginTop:25}} />;
  },
}),
tabBarOptions: {
  showLabel: false,
},
}
);

export default createAppContainer(TabNavigator);
>>>>>>> 2691dd45cb7afa6c3044ebbeccd33af23018d561
