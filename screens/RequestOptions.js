
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, FlatList, TouchableOpacity} from 'react-native';
import OrangeBackground from './../components/OrangeBackground';
import Toolbar from '../components/Toolbar';

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

    driverSearchAgain = () => {
        this.props.navigation.goBack('DriverSearch')
    }

    render() {
    return (
        <View>
            <OrangeBackground/>
            <Toolbar pageType={'Driver'}/>
            <TouchableOpacity style={styles.subView} onPress={this.driverSearchAgain}>
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

