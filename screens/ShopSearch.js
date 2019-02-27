import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import OrangeBackground from './../components/OrangeBackground';
import FontLoad from './../components/FontLoad';

const window = Dimensions.get("window")

export default class ShopSearch extends React.Component {
  static navigationOptions = {
    header: null,
    };
    
    search = () => {
      this.props.navigation.navigate('Results')
    }

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
          <OrangeBackground/>
          <View style={styles.toolbar}>
              <Image style={styles.cartIcon}
                  source={require('./../assets/images/top_shopping_cart.png')} />
              <Image style={styles.personIcon}
                  source={require('./../assets/images/person.png')} />
          </View>
          <View style={styles.mainView}>
            <Text style={styles.header}>Let's shopU!</Text>
            <View style={styles.slantedBlueRectangle}></View>
            <View style={styles.slantedPurpleRectangle}></View>
            <View style={styles.whiteCard}>
              <View style={{flexDirection: 'row', marginBottom: window.height*.01}}>
                <TouchableOpacity onPress={this.search}>
                  <Image style={styles.searchIcon} 
                      source={require('./../assets/images/search_icon.png')}/>
                </TouchableOpacity>
                <View style={{width: window.width*.75}}>
                  <TextInput style={styles.searchText} placeholder={'Search for a Product'} placeholderTextColor={'#605DF1'}>Search for a Product</TextInput>
                </View>
              </View>
              <View style={styles.searchLine}/>
            </View>
          </View>
        </View>
      ) : null
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  toolbar: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: window.height*.05, 
    paddingHorizontal: window.width*.05
  },
  cartIcon: {
    width: 43,
    height: 44,
  },
  personIcon: {
    width: 42,
    height: 40,
  },
  mainView: {
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop: window.height*.02
  },
  header: {
    fontSize: 80,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
  },
  slantedBlueRectangle: {
    backgroundColor: '#6DC4E0',
    transform:([{ rotateZ:'10deg'}]),
    width: window.width*1.5,
    height: window.height*.13,
    marginTop: window.height*.1,
  },
  slantedPurpleRectangle: {
    backgroundColor: '#605DF1',
    transform:([{ rotateZ:'10deg'}]),
    width: window.width*1.5,
    height: window.height*.13,
    marginTop: window.height*.03,
  },
  whiteCard: {
    backgroundColor: '#ffffff',
    width: window.width*.9,
    height: window.height*.45,
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: window.height*-.36
  },
  searchLine: {
    backgroundColor: '#6DC4E0',
    width: window.width*.8,
    height: window.height*.003,
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginTop: window.height*.005
  },
  searchText: {
    fontSize: 24,
    color: '#605DF1',
    fontFamily: 'Montserrat-Medium',
    marginTop: window.height*.015,
    marginLeft: window.width*.04

  },
  searchIcon: {
    height: 23,
    width: 22,
    marginTop: window.height*.019
  },
});
