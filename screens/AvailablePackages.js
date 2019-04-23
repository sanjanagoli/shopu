
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, FlatList, TouchableOpacity} from 'react-native';
import OrangeBackground from './../components/OrangeBackground';
import Toolbar from '../components/Toolbar';
import firebase from 'firebase';




let colors = ['#6DC4E0', '#605DF1']

let items = [
  {
    name: 'Ijemma',
    packageSize: 'Heavy - 1 package',
    location: 'River',
  },
  {
    name: 'Archita',
    packageSize: 'Heavy - 2 packages',
    location: 'Choates',
  },
  {
    name: 'Archita',
    packageSize: 'Heavy - 2 packages',
    location: 'Choates',
  }
]

function writeNewPost(uid, username, email, firstName, lastName, location) {
  // A post entry.
  var user = {
    username: username,
    email: email,
    firstName: firstName,
    lastName: lastName,
    location: location

  };

  // Get a key for a new Post.
  var newUserKey = firebase.database().ref().child('users').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/users/' + 'user' + newUserKey] = user;
  //updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}

export default class AvailablePackages extends Component {
  static navigationOptions = {
    header: null,
    };

    constructor(props) {
      super(props);
      this.state = {
        deliveryArray: [],
        userArray: {}
      } 
    };

    // componentWillMount () {
      
    //   var deliveryObjects = firebase.database().ref('deliveries');
      
    //   deliveryObjects.on('value', function(snapshot) {
    //     this.setState(
    //       { deliveryArray: snapshot.val() }
    //     );
    //     console.info(snapshot.val());
    //   }.bind(this));
      
    // } 

    

    componentWillMount() {
      //writeNewPost(5, 'username', 'user@email.com', 'user', 'name', 'location');
      this.fetchData();
    }
    fetchData = async () => {
        var data1 = [];
        var data2 = [];
        var fireBaseResponse = firebase.database().ref('deliveries');
        fireBaseResponse.once('value').then(snapshot => {
            snapshot.forEach(item => {
                var temp = item.val();
                data1.push(temp);
                
                return false;
            });
        
            this.setState (
              {deliveryArray: data1} 
            )
            
        });
        fireBaseResponse = firebase.database().ref('users');
        fireBaseResponse.once('value').then(snapshot => {
            snapshot.forEach(item => {
                var temp = item.val();
                data2.push({
                  key: item.key,
                  value: temp
                });
                return false;
            });
           
            this.setState (
              {userArray: data2} 
            )
            console.log(this.state.userArray);
        });

        
    }

    getFirstName = (userId) => {
      for (i = 0; i < this.state.userArray.length; i++) {
        if(this.state.userArray[i].key == userId) {
          return this.state.userArray[i].value.firstName;
        }
      }
    }

    getLocation = (userId) => {
      for (i = 0; i < this.state.userArray.length; i++) {
        if(this.state.userArray[i].key == userId) {
          return this.state.userArray[i].value.location;
        }
      }
    }
    
    onPress = () => {
        //navigate to available packages modal -- insert when finished
        //this.props.navigation.navigate('Available Packages Modal')
    }



    render() {
    return (
        <View>
            <OrangeBackground/>
            <Toolbar pageType={'Driver'} navigation={this.props.navigation}/>
            {/* {console.log(items)} */}
            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: Dimensions.get('screen').height*.06}}>
                <Text style = {styles.header}>Available Packages</Text>
                <FlatList
                    data= {this.state.deliveryArray}
                    keyExtractor = {(item, index) => index.toString()}
                    renderItem = {
                        ({item, index}) => {
                            return (  
                            <TouchableOpacity onPress={this.onPress}>                              
                                    <View style={[styles.rectangles, {backgroundColor: colors[index % colors.length]}]}>
                                        <Text style = {styles.name}>{this.getFirstName(item.buyer)}</Text>
                                        <Text style = {styles.packageSize}>{item.packageSize}</Text>
                                        <Text style = {styles.location}>{this.getLocation(item.buyer)}</Text>
                                    </View> 
                                </TouchableOpacity>   
                            )
                        }
                    }
                />  
              </View>  
        </View>   
    );
  }
};

const styles = StyleSheet.create({
  subView: {
    flexDirection: 'row', 
    paddingHorizontal: Dimensions.get("screen").width*.03,
    marginTop: Dimensions.get("screen").height*.02
  },
  arrowIcon: {
    width: 20,
    height: 15,
  },
  browseText: {
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
    marginLeft: Dimensions.get("screen").width*.03,
    marginTop: -Dimensions.get("screen").height*.004,
  },
  header: {
    fontSize: 40,
    color:  '#fff',
    textAlign: 'center',
    width: Dimensions.get("screen").width,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: Dimensions.get("screen").width*.01,
    marginBottom: Dimensions.get("screen").width*.13
  },
  name: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'left',
    fontFamily: 'Montserrat-Bold',
    marginLeft: Dimensions.get("screen").width*.03,
    paddingTop: Dimensions.get("screen").height*.02,
    paddingHorizontal: Dimensions.get("screen").width*.05,
  },
  packageSize: {
    fontSize: 25,
    color:  '#fff',
    textAlign: 'left',
    fontFamily: 'Montserrat-Bold',
    marginLeft: Dimensions.get("screen").width*.02,
    paddingHorizontal: Dimensions.get("screen").width*.05,
  },
  location: {
    fontSize: 25,
    color:  '#fff',
    textAlign: 'left',
    fontFamily: 'Montserrat-Bold',
    marginLeft: Dimensions.get("screen").width*.02,
    paddingHorizontal: Dimensions.get("screen").width*.05,
    paddingBottom: Dimensions.get("screen").height*.02,
  },
  rectangles: {
    width: Dimensions.get("screen").width*.90,
    height: Dimensions.get("screen").height*.20,
    justifyContent: 'space-between',
    marginTop: Dimensions.get("screen").height*.015,
  },
});

