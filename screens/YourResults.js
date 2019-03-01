
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, FlatList, TouchableOpacity} from 'react-native';
import OrangeBackground from '../components/OrangeBackground';

let colors = ['#6DC4E0', '#605DF1']

let items = [
  {
    icon: require('./../assets/images/apple.png'),
    name: 'Apple - CVS',
    price: '$1.99 per pound',
    types: 'Granny Smith, Fuji',
    eta: 'ETA: 2 Hours',
  },
  {
    icon: require('./../assets/images/apple.png'),
    name: 'Apple - Walmart',
    price: '$1.25 per pound',
    types: 'Granny Smith, Fuji',
    eta: 'ETA: 2 Hours',
  }
]


export default class YourResults extends Component {
  static navigationOptions = {
    header: null,
    };
    
    resultItem = () => {
        this.props.navigation.navigate('Item') //item page needs to be added
      }

    searchAgain = () => {
        this.props.navigation.navigate('ShopSearch')
    }

    render() {
    return (
        <View>
            <OrangeBackground/>
            <View style={styles.toolbar}>
              <Image style={styles.shoppingCartIcon}
                  source={require('./../assets/images/shopping-cart.png')} />
              <Image style={styles.personIcon}
                  source={require('./../assets/images/person.png')} />
            </View>
            <TouchableOpacity style={styles.subView} onPress={this.searchAgain}>
              <Image style={styles.arrowIcon}
                  source={require('./../assets/images/back_arrow.png')} />
              <Text style={styles.searchAgainText}>Search Again</Text>
            </TouchableOpacity>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style = {styles.header}>Your Results</Text>
                <FlatList
                    data= {items}
                    keyExtractor = {(item, index) => index.toString()}
                    renderItem = {
                        ({item, index}) => {
                        return ( 
                        <TouchableOpacity onPress={this.resultItem}>
                        <View style={[styles.rectangles, {backgroundColor: colors[index % colors.length]}]}>
                            <View style={styles.innerItem}>
                              <Image source={item.icon} style={styles.icon}/>
                              <View style={styles.textInnerItem}>
                                <Text style = {styles.name}>{item.name}</Text>
                                <Text style = {styles.price}>{item.price}</Text>
                              </View>
                            </View>
                            <Text style = {styles.types}>{item.types}</Text>
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
    paddingHorizontal: Dimensions.get("screen").width*.03
  },
  shoppingCartIcon: {
    width: 60,
    height: 60,
  },
  personIcon: {
    width: 42,
    height: 40,
  },
  subView: {
    flexDirection: 'row', 
    paddingHorizontal: Dimensions.get("screen").width*.05,
    marginTop: Dimensions.get("screen").height*.01
  },
  innerItem: {
    flexDirection: 'row', 
    paddingHorizontal: Dimensions.get("screen").width*.02,
    marginTop: Dimensions.get("screen").height*.02
  },
  textInnerItem: {
    flexDirection: 'column', 
    paddingHorizontal: Dimensions.get("screen").width*.03,
  },
  arrowIcon: {
    width: 20,
    height: 10,
  },
  icon: {
    width: 75, 
    height: 75,
  },
  searchAgainText: {
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
    marginLeft: Dimensions.get("screen").width*.03,
    marginTop: -Dimensions.get("screen").height*.006,
  },
  header: {
    fontSize: 55,
    color:  '#fff',
    textAlign: 'center',
    width: Dimensions.get("screen").width,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: Dimensions.get("screen").height*.03,
    marginBottom: Dimensions.get("screen").width*.05,
  },
  name: {
    fontSize: 30,
    color:  '#fff',
    textAlign: 'left',
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: Dimensions.get("screen").width*.02,
    marginBottom: Dimensions.get("screen").width*.01,
  },
  price: {
    fontSize: 30,
    color:  '#fff',
    textAlign: 'left',
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: Dimensions.get("screen").width*.02,
    marginBottom: Dimensions.get("screen").width*.05,
  },
  types: {
    fontSize: 23,
    color:  '#fff',
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
    marginLeft: Dimensions.get("screen").width*.02,
    marginBottom: Dimensions.get("screen").height*.01,
  },
  eta: {
    fontSize: 23,
    color:  '#fff',
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
    marginLeft: Dimensions.get("screen").width*.02,
  },
  rectangles: {
    width: Dimensions.get("screen").width*.90,
    height: Dimensions.get("screen").height*.28,
    marginTop: Dimensions.get("screen").width*.03,
  },
});
