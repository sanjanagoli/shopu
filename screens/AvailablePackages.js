
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, FlatList, TouchableOpacity} from 'react-native';
import OrangeBackground from './../components/OrangeBackground';
import Toolbar from '../components/Toolbar';
import firebase from 'firebase';


componentWillMount = () => {
  console.log("reached");
  var deliveryObjects = firebase.database().ref('deliveries/');
  this.state.deliveryArray = deliveryObjects.on('value', function(snapshot) {
    snapshot.val();
  });
}

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


export default class AvailablePackages extends Component {
  static navigationOptions = {
    header: null,
    };

    

    constructor(props) {
      super(props);
      this.state = {
        deliveryArray: {}
      };
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
                                        <Text style = {styles.name}>{item.buyer}</Text>
                                        <Text style = {styles.packageSize}>{item.packageSize}</Text>
                                        {/* <Text style = {styles.location}>{item.location}</Text> */}
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
    height: Dimensions.get("screen").height*.16,
    justifyContent: 'space-between',
    marginTop: Dimensions.get("screen").height*.015,
  },
});

