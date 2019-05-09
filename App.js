import React from 'react';
import { StyleSheet, Text, View, Image, YellowBox, Dimensions} from 'react-native';
import firebase from 'firebase';
import config from './services/firebase-config';
import FontLoad from './components/FontLoad';
import { createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import AccountProfile from './screens/AccountProfile';
import AvailablePackages from './screens/AvailablePackages';
import Checkout from './screens/Checkout';
import AuthorizeDriver from './screens/AuthorizeDriver';
import Deliveries from './screens/Deliveries';
import Item from './screens/Item';
import Login from './screens/Login';
import OrderComplete from './screens/OrderComplete';
import Rating from './screens/Rating';
import Register from './screens/Register';
import RequestOptions from './screens/RequestOptions';
import RequestStatus from './screens/RequestStatus';
import RequestProfile from './screens/RequestProfile';
import ShoppingList from './screens/ShoppingList';
import ShopSearch from './screens/ShopSearch';
import Welcome from './screens/Welcome';
import YourCart from './screens/YourCart';
import YourResults from './screens/YourResults';
import Payment from './screens/Payment';
import LoadingScreen from './screens/LoadingScreen';


YellowBox.ignoreWarnings([
  'Require cycle:',
]);

FontLoad.then((res) => {
})

const shopStackNavigator = createStackNavigator({
  ShopSearch: {
    screen: ShopSearch
  },
  LoadingScreen: {
    screen: LoadingScreen
  },
  AuthorizeDriver: {
    screen: AuthorizeDriver
  },
  YourCart: {
    screen: YourCart
  },
  Checkout: {
    screen: Checkout
  },
  OrderComplete: {
    screen: OrderComplete
  },
  Rating: {
    screen: Rating
  },
  AccountProfile: {
    screen: AccountProfile
  }
});

const driverStackNavigator = createStackNavigator({
  AvailablePackages: {
    screen: AvailablePackages
  },
  RequestOptions: {
    screen: RequestOptions
  },
  RequestStatus: {
    screen: RequestStatus
  },
  ShoppingList: {
    screen: ShoppingList
  },
  Rating: {
    screen: Rating
  },
  RequestStatus: {
    screen: RequestStatus
  },
  AccountProfile: {
    screen: AccountProfile
  },
  Deliveries: {
    screen: Deliveries
  }
});

const TabNavigator = createBottomTabNavigator({
  ShopSearch: shopStackNavigator,
  DriverSearch: driverStackNavigator,
},
{
defaultNavigationOptions: ({ navigation }) => ({
  tabBarIcon: ({ focused }) => {
    const { routeName } = navigation.state;
    let imageName;
    if (routeName === 'ShopSearch') {
      imageName = require('./assets/images/blue-nav-cart.png');
      if (focused) {
        imageName = require('./assets/images/filled_cart.png');
      }
    } else if (routeName === 'Notifications') {
      imageName = require('./assets/images/home_icon.png');
      if (focused) {
        imageName = require('./assets/images/filled_house.png');
      }
    } else if (routeName === 'DriverSearch') {
      imageName = require('./assets/images/blue_person_w_bag.png');
      if (focused) {
        imageName = require('./assets/images/blue_filled_person.png');
      }
    } 
    return <Image source={imageName} style={{width: Dimensions.get("screen").width*.1, height: Dimensions.get("screen").height*.05, marginTop: Dimensions.get("screen").height*.005, resizeMode: 'contain'}} />;
  },
}),
tabBarOptions: {
  showLabel: false,
  style: {
  height: Dimensions.get("screen").height*.08
  
}
},
}
);

export default createAppContainer(TabNavigator);
