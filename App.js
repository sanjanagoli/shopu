import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, Image} from 'react-native';
=======
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
>>>>>>> 208976f3093d1caa55068a22dd4d11d62e5713c7
import FontLoad from './components/FontLoad';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Notifications from './screens/Notifications';
import ShopSearch from './screens/ShopSearch';
import Ionicons from 'react-native-vector-icons/Ionicons';


class ThirdsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  "ShopSearch": ShopSearch,
  Notifications: Notifications,
  Thirds: ThirdsScreen,
},
{
defaultNavigationOptions: ({ navigation }) => ({
  tabBarIcon: ({ tintColor }) => {
    const { routeName } = navigation.state;
    let imageName;
    if (routeName === 'ShopSearch') {
      imageName = require('./assets/images/nav-cart.png');
    } else if (routeName === 'Notifications') {
      imageName = require('./assets/images/home_icon.png');
    } else if (routeName === 'Thirds') {
      imageName = require('./assets/images/person_w_bag.png');
    }
    return <Image source={imageName} style={{width: 46, height: 42.99, marginTop:25}} />;
  },
}),
tabBarOptions: {
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
  showLabel: false,
  justifyContent: 'center',
  
},

}
);

export default createAppContainer(TabNavigator);

class App extends React.Component {

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
          <Text>Open up App.js to start working on your app!</Text>
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

