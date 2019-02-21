import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
  ShopSearch: ShopSearch,
  Notifications: Notifications,
  Thirds: ThirdsScreen,
},
{
defaultNavigationOptions: ({ navigation }) => ({
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
    const { routeName } = navigation.state;
    let IconComponent = Ionicons;
    let iconName;
    if (routeName === 'Home') {
      iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      // Sometimes we want to add badges to some icons. 
      // You can check the implementation below.
      IconComponent = HomeIconWithBadge; 
    } else if (routeName === 'Settings') {
      iconName = `ios-options${focused ? '' : '-outline'}`;
    }

    // You can return any component that you like here!
    return <IconComponent name={iconName} size={25} color={tintColor} />;
  },
}),
tabBarOptions: {
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
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

