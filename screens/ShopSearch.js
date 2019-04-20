import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity, PixelRatio} from 'react-native';
import OrangeBackground from './../components/OrangeBackground';
import FontLoad from './../components/FontLoad';
import Toolbar from './../components/Toolbar';
import PrimaryButton from '../components/PrimaryButton';
import DropDown from './../components/DropDown';
import moment from 'moment'

var newDeliveryKey = firebase.database().ref().child('posts').push().key

let sizeItems = 
  [
  {
    label: 'Heavy',
    value: 'Heavy',
  },
  {
    label: 'Normal',
    value: 'Normal',
  },
  ]

let quantItems = 
  [
  {
    label: '1-2',
    value: '1-2 Package(s)',
  },
  {
    label: '3-5',
    value: '3-5 Packages',
  },
  {
    label: '6+',
    value: '6+ Packages',
  },
  ]

const database = firebase.database();
const window = Dimensions.get("window")
export default class ShopSearch extends React.Component {

  renderFontSize = () => {
    if (PixelRatio.get() === 2) {
      return 90
    }
    else if (PixelRatio.get() === 3){
      return 60
    }
  }

  setPickerSize = (itemValue) => {
    this.setState({ pickerSelectionSize: itemValue})
  }

  setPickerQuant = (itemValue) => {
    this.setState({ pickerSelectionQuant: itemValue})
  }

  static navigationOptions = {
    header: null,
    };
    
    letsgo = () => {
      this.props.navigation.navigate('LoadingScreen')
      database.ref('deliveries/' + 'delivery'+newDeliveryKey).set({
        buyer: 'ijemma',
        driver: 'bob',
        packageSize: this.state.pickerSelectionSize,
        packageNumber: this.state.pickerSelectionQuant,
        date: moment().format(),
        status: 0,
        cost: 3,
        confirmedEmail: false,
        accepted: false
      })
      }
      else if (PixelRatio.get() === 3){
        return 60
      }
    }
<<<<<<< HEAD
  
    setPickerSize = (itemValue) => {
      this.setState({ pickerSelectionSize: itemValue})
    }
  
    setPickerQuant = (itemValue) => {
      this.setState({ pickerSelectionQuant: itemValue})
=======

    componentWillMount = () => {
      FontLoad.then((res) => {
        this.setState({ fontLoaded: true });
      })
>>>>>>> 2f64677db6bec57040c29802f69e47403f69914c
    }
  
    static navigationOptions = {
      header: null,
      };
      
      letsgo = () => {
        this.props.navigation.navigate('LoadingScreen')
        }
  
      constructor(props) {
        super(props);
        this.state = {
          fontLoaded: false,
          comments: ' ', 
          pickerSelectionSize: 'Choose Option',
          pickerSelectionQuant: 'Choose Option',
        }
      }
      
      search = () => {
        this.props.navigation.navigate('LoadingScreen')
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
            <Toolbar navigation={this.props.navigation}/>
            <View style={styles.mainView}>
                <View style={styles.whiteBox}> 
                  <View style={styles.rowBox}>
                    <Text style={styles.searchText}>How big is your mail load?</Text>
                  </View>
                  <Text style={styles.bigText}>{this.state.pickerSelectionSize}</Text>
                  <View style={{marginLeft: window.width*.6, marginTop: -window.height*0.03}}>
                    <DropDown selectedValue={this.state.pickerSelectionSize} setState={this.setPickerSize} items={sizeItems}/>
                  </View>
                  <View style={styles.searchLine}/>  

                    
                </View>
                <View style={styles.whiteBox2}> 
                  <View style={styles.rowBox}>
                    <Text style={styles.searchText2}>How many packages do you have?</Text>
                  </View>
                  <Text style={styles.quantityText}>{this.state.pickerSelectionQuant}</Text>
                  <View style={{marginTop: -window.height*.03, marginLeft: window.width*.6}}>
                    <DropDown selectedValue={this.state.pickerSelectionQuant} setState={this.setPickerQuant} items={quantItems}/>
                  </View>  
                  <View style={styles.searchLine}/>
                </View>
                <View style={styles.button}>
                  <TouchableOpacity onPress={this.letsgo}>
                    <PrimaryButton backgroundColor={'#19C6D1'} title={"Let's Go!"} height={60} fontSize={30}/>
                  </TouchableOpacity>
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
      backgroundColor: '#F3F3F3',
    },
    mainView: {
      justifyContent: 'center',
      alignItems: 'center', 
    },
    whiteBox: {
      backgroundColor: '#ffffff',
      width: window.width*.9,
      height: window.height*.27,
      shadowOffset: {width: 0, height: 5},
      shadowColor: '#000000',
      shadowOpacity: 0.25,
      shadowRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: window.height*.07,
      flexDirection: 'column',
      borderColor: '#19C6D1',
      borderWidth: 1.5,
      borderRadius: 5,
    },
    whiteBox2: {
      backgroundColor: '#ffffff',
      width: window.width*.9,
      height: window.height*.27,
      shadowOffset: {width: 0, height: 5},
      shadowColor: '#000000',
      shadowOpacity: 0.25,
      shadowRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: window.height*.06,
      flexDirection: 'column',
      borderColor: '#19C6D1',
      borderWidth: 1.5,
      borderRadius: 5,
    },
    searchLine: {
      backgroundColor: '#19C6D1',
      width: window.width*.75,
      height: window.height*.003,
      shadowOffset: {width: 0, height: 2},
      shadowColor: '#000000',
      shadowOpacity: 0.25,
      shadowRadius: 4,
      marginTop: window.height*.005
    },
    searchText: {
      fontSize: 24,
      color: '#212121',
      fontFamily: 'Montserrat-Bold',
      marginLeft: window.width*.01,
    },
    searchText2: {
      fontSize: 24,
      color: '#212121',
      fontFamily: 'Montserrat-Bold',
      marginLeft: window.width*.01,
      marginTop: -window.height*0.02,
    },
    button: { 
      width: Dimensions.get("screen").width*.6,
    },
    rowBox: {
      width: window.width*.75, 
      flexDirection: 'row',
    },
    bigText: {
      fontSize: 22, 
      fontFamily: 'Montserrat-Regular', 
      color: '#212121',
      marginTop: window.height*.05,
      textAlign: 'left',
      marginRight: window.width*.33,
    },
    quantityText: {
      fontSize: 22, 
      fontFamily: 'Montserrat-Regular', 
      color: '#212121',
      marginTop: window.height*.055,
      textAlign: 'left',
      marginRight: window.width*.33,
    },
  });
  
  
