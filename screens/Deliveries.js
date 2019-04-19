
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, FlatList, TouchableOpacity} from 'react-native';
import OrangeBackground from './../components/OrangeBackground';
import Toolbar from '../components/Toolbar';


let colors = ['#6DC4E0', '#605DF1']

let items = [
  {
    name: 'Ijemma',
    packageSize: 'Heavy - 1 package',
    location: 'River',
    email: '',
    hasEmail: false,
  },
  {
    name: 'Archita Harathi',
    packageSize: 'Heavy - 2 packages',
    location: 'Choates',
    email: 'archita.22@dart.edu',
    hasEmail: true,
  },
  {
    name: 'Archita Harathi',
    packageSize: 'Heavy - 2 packages',
    location: 'Choates',
    email: 'archita.22@dart.edu',
    hasEmail: true,
  }
]


export default class Deliveries extends Component {
  static navigationOptions = {
    header: null,
    };
    
    waitOrConfirm = (confirm) => {
        if(confirm) {
            //wait until requeststatus page is made to edit
            this.props.navigation.navigate('RequestStatus', {isConfirmed: true});
        }
        else {
            //wait until requeststatus page is made to edit
            //this.props.navigation.navigate('PendingRequestStatus')
        }
    }


    render() {
    return (
        <View>
            <OrangeBackground/>
            <Toolbar pageType={'Driver'} navigation={this.props.navigation}/>
            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: Dimensions.get('screen').height*.06}}>
                <Text style = {styles.header}>Deliveries</Text>
                <FlatList
                    data= {items}
                    keyExtractor = {(item, index) => index.toString()}
                    renderItem = {
                        ({item, index}) => {
                            return ( 
                            <TouchableOpacity onPress={this.waitOrConfirm.bind(this, item.hasEmail)}>
                                    <View style={[styles.rectangles, {backgroundColor: colors[index % colors.length]}]}>
                                        <Text style = {styles.name}>{item.name}</Text>
                                        <Text style = {styles.packageSize}>{item.packageSize}</Text>
                                        <Text style = {styles.location}>{item.location}</Text>
                                        <Text style = {styles.email}>{item.email}</Text>
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
    fontFamily: 'Montserrat-Bold',
    marginLeft: Dimensions.get("screen").width*.02,
  },
  packageSize: {
    fontSize: 25,
    color:  '#fff',
    textAlign: 'left',
    fontFamily: 'Montserrat-Bold',
    marginLeft: Dimensions.get("screen").width*.02,
  },
  location: {
    fontSize: 25,
    color:  '#fff',
    textAlign: 'left',
    fontFamily: 'Montserrat-Bold',
    marginLeft: Dimensions.get("screen").width*.02,
  },
  email: {
    fontSize: 22,
    color:  '#fff',
    textAlign: 'left',
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: Dimensions.get("screen").width*.02,
  },
  rectangles: {
    width: Dimensions.get("screen").width*.90,
    height: Dimensions.get("screen").height*.16,
    marginTop: 10,
  },
});


