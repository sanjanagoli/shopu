
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, FlatList, TouchableOpacity} from 'react-native';
import OrangeBackground from './../components/OrangeBackground';

let colors = ['#6DC4E0', '#605DF1']

let items = [
  {
    name: 'Name',
    timeLocation: 'Time, Location',
    summary: 'Shopping Cart Summary',
    eta: 'ETA: 2 Hours',
  },
  {
    name: 'Name',
    timeLocation: 'Time, Location',
    summary: 'Shopping Cart Summary',
    eta: 'ETA: 2 Hours',
  },
  {
    name: 'Name',
    timeLocation: 'Time, Location',
    summary: 'Shopping Cart Summary',
    eta: 'ETA: 2 Hours',
  }
]


export default class RequestOptions extends Component {
  static navigationOptions = {
    header: null,
    };
    
    request = () => {
        this.props.navigation.navigate('RequestProfile')
      }

    searchAgain = () => {
        this.props.navigation.navigate('SearchingRequest')
    }

    render() {
    return (
        <View>
            <OrangeBackground/>
            <View style={styles.toolbar}>
              <Image style={styles.shoppingBagicon}
                  source={require('./../assets/images/shopping_bag.png')} />
              <Image style={styles.personIcon}
                  source={require('./../assets/images/person.png')} />
            </View>
            <TouchableOpacity style={styles.subView} onPress={this.searchAgain}>
              <Image style={styles.arrowIcon}
                  source={require('./../assets/images/back_arrow.png')} />
              <Text style={styles.browseText}>Search Again</Text>
            </TouchableOpacity>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style = {styles.header}>Request Options</Text>
                <FlatList
                    data= {items}
                    keyExtractor = {(item, index) => index.toString()}
                    renderItem = {
                        ({item, index}) => {
                        return ( 
                        <TouchableOpacity onPress={this.request}>
                        <View style={[styles.rectangles, {backgroundColor: colors[index % colors.length]}]}>
                            <Text style = {styles.name}>{item.name}</Text>
                            <Text style = {styles.locationTime}>{item.timeLocation}</Text>
                            <Text style = {styles.summary}>{item.summary}</Text>
                            <Text style = {styles.eta}>{item.eta}</Text>
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
  toolbar: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: Dimensions.get("screen").height*.05, 
    paddingHorizontal: Dimensions.get("screen").width*.05
  },
  shoppingBagicon: {
    width: 37,
    height: 40,
  },
  personIcon: {
    width: 42,
    height: 40,
  },
  subView: {
    flexDirection: 'row', 
    paddingHorizontal: Dimensions.get("screen").width*.03,
    marginTop: Dimensions.get("screen").height*.02
  },
  arrowIcon: {
    width: 30,
    height: 25,
  },
  browseText: {
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
    marginLeft: Dimensions.get("screen").width*.03,
  },
  header: {
    fontSize: 50,
    color:  '#fff',
    textAlign: 'center',
    width: Dimensions.get("screen").width,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: Dimensions.get("screen").width*.01,
    marginBottom: Dimensions.get("screen").width*.05
  },
  name: {
    fontSize: 30,
    color:  '#fff',
    textAlign: 'left',
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: Dimensions.get("screen").width*.02,
  },
  locationTime: {
    fontSize: 30,
    color:  '#fff',
    textAlign: 'left',
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: Dimensions.get("screen").width*.02,
  },
  summary: {
    fontSize: 20,
    color:  '#fff',
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
    marginLeft: Dimensions.get("screen").width*.02,
  },
  eta: {
    fontSize: 20,
    color:  '#fff',
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
    marginLeft: Dimensions.get("screen").width*.02,
  },
  rectangles: {
    width: Dimensions.get("screen").width*.90,
    height: Dimensions.get("screen").height*.16,
    marginTop: 10,
  },
});

