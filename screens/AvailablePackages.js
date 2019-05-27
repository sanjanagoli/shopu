
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import Toolbar from '../components/Toolbar';
import firebase from 'firebase';
import PackagesBox from '../components/PackagesBox';

export default class AvailablePackages extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.state = {
      deliveries: [],
      users: [],
      moveOn: false
    }
  };

  static navigationOptions = {
    header: null,
  };

  componentWillMount() {
    //writeNewPost(5, 'username', 'user@email.com', 'user', 'name', 'location');
    let self = this;
    const interval = setInterval(() => { // setInterval creates a new context that doesn't has the same this as every other function
      this.fetchData(self);
    }, 500)
    this.setState({ interval })
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
  }

  fetchData = (self) => {
    let deliveries = [];
    let users = [];
    // grabbing all users
    let usersResponse = firebase.database().ref('users');
    usersResponse.once('value').then(snapshot => {
      snapshot.forEach(item => {
        let temp = item.val();
        users.push({
          key: item.key,
          value: temp
        });
      });
      self.setState({ users }, () => {
        // grabbing all deliveries
        let deliveriesResponse = firebase.database().ref('deliveries');
        deliveriesResponse.once('value').then(snapshot => {
          snapshot.forEach(item => {
            let temp = item.val();
            deliveries.push(temp);
          });
          self.setState({ deliveries })
        });
      })


    });
  }

  getFirstName = (userId) => {
    for (i = 0; i < this.state.userArray.length; i++) {
      if (this.state.userArray[i].key == userId) {
        return this.state.userArray[i].value.firstName;
      }
    }
  }

  getLocation = (userId) => {
    for (i = 0; i < this.state.userArray.length; i++) {
      if (this.state.userArray[i].key == userId) {
        return this.state.userArray[i].value.location;
      }
    }
  }

  onPress = () => {
    //navigate to available packages modal -- insert when finished
    this.props.navigation.navigate('AccountProfile')
  }

  render() {
    return (
      <View style={styles.container}>
        <Toolbar pageType={'Driver'} navigation={this.props.navigation} title={'Available Packages'} />
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: Dimensions.get('screen').height * .01, height: Dimensions.get("screen").height * 0.8, paddingBottom: Dimensions.get("screen").height * .05 }}>
          <FlatList
            data={this.state.deliveries}
            keyExtractor={(item, index) => index.toString()}
            renderItem={
              ({ item, index }) => {
                return (
                  <PackagesBox
                    item={item}
                    packageSize={item.packageSize}
                    navigation={this.props.navigation}
                    users={this.state.users}
                  />
                );
              }
            }
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    flex: 1,
  },
  subView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get("screen").width,
  },
  header: {
    fontSize: 40,
    color: '#fff',
    textAlign: 'center',
    width: Dimensions.get("screen").width,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: Dimensions.get("screen").width * .01,
    marginBottom: Dimensions.get("screen").width * .13
  },
  name: {
    fontSize: 30,
    color: '#212121',
    textAlign: 'left',
    fontFamily: 'Montserrat-Bold',
    marginLeft: Dimensions.get("screen").width * .06,
    paddingTop: Dimensions.get("screen").height * .03,
    paddingRight: Dimensions.get("screen").width * .40,
  },
  packageSize: {
    fontSize: 18,
    color: '#212121',
    textAlign: 'left',
    fontFamily: 'Montserrat-Medium',
    marginLeft: Dimensions.get("screen").width * .06,
    marginTop: Dimensions.get("screen").height * .015,
  },
  location: {
    fontSize: 18,
    color: '#212121',
    textAlign: 'left',
    fontFamily: 'Montserrat-Bold',
    marginLeft: Dimensions.get("screen").width * .02,
    paddingHorizontal: Dimensions.get("screen").width * .05,
    paddingTop: Dimensions.get("screen").height * .03,
  },
  rectangles: {
    width: Dimensions.get("screen").width * .90,
    height: Dimensions.get("screen").height * .17,
    marginTop: Dimensions.get("screen").height * .035,
    borderColor: '#19C6D1',
    borderWidth: 1.5,
    borderRadius: 5,
    shadowOffset: { width: 0, height: Dimensions.get("screen").height * .005 },
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
});

