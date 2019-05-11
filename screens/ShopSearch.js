import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity, PixelRatio} from 'react-native';
import OrangeBackground from './../components/OrangeBackground';
import FontLoad from './../components/FontLoad';
import Toolbar from './../components/Toolbar';
import PrimaryButton from '../components/PrimaryButton';
import DropDown from './../components/DropDown';
import moment from 'moment';
import RequestStatus from './../screens/RequestStatus';
import StatusUpdateModal from './../components/StatusUpdateModal';




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
      database.ref('deliveries/' + 'delivery'+newDeliveryKey).set({
        buyer: 'user-Ld7TP38Nf47JgfHC2FG',
        driver: 'bob',
        packageSize: this.state.pickerSelectionSize,
        packageNumber: this.state.pickerSelectionQuant,
        date: moment().format(),
        status: 0,
        cost: 3,
        confirmedEmail: false,
        accepted: false
      
      }) 
   
      this.props.navigation.navigate('LoadingScreen', {
        deliveryKey: newDeliveryKey,
        userKey: 'user-Ld7TP38Nf47JgfHC2FG',
      })
      }
    
    componentWillMount = () => {
      FontLoad.then((res) => {
        this.setState({ fontLoaded: true });
      })
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

    firstSizeValue = () => {
      this.setState({
        pickerSelectionSize: 'Heavy',
      })
    }

    firstQuantValue = () => {
      this.setState({
        pickerSelectionQuant: '1-2 Package(s)'
      })
    }

      
    render() {
      return (
        this.state.fontLoaded ? (
          <View style={styles.container}>
            <Toolbar navigation={this.props.navigation} title={`Let's mailU!`}/>
            <View style={styles.mainView}>
                <View style={styles.whiteBox}> 
                  <View style={styles.rowBox}>
                    <Text style={styles.searchText}>How big is your mail load?</Text>
                  </View>
                  <Text style={styles.bigText}>{this.state.pickerSelectionSize}</Text>
                  <View style={{marginLeft: window.width*.75, marginTop: -window.height*0.03}}>
                    <DropDown selectedValue={this.state.pickerSelectionSize} setState={this.setPickerSize} items={sizeItems} firstOption={this.firstSizeValue} />
                  </View>
                  <View style={styles.searchLine}/>     
                </View>
                <View style={styles.whiteBox}> 
                  <View style={styles.rowBox}>
                    <Text style={styles.searchText}>How many packages do you have?</Text>
                    <Image style={styles.package}
                      source={require('./../assets/images/package.png')} />
                  </View>
                  <Text style={styles.quantityText}>{this.state.pickerSelectionQuant}</Text>
                  <View style={{marginTop: -window.height*.03, marginLeft: window.width*.75}}>
                    <DropDown selectedValue={this.state.pickerSelectionQuant} setState={this.setPickerQuant} items={quantItems} firstOption={this.firstQuantValue}/>
                  </View>  
                  <View style={styles.searchLine}/>
                </View>
                <View style={styles.button}>
                  <TouchableOpacity onPress={this.letsgo}>
                    <PrimaryButton onPress={this.letsgo} backgroundColor={'#19C6D1'} title={"Let's Go!"} height={60} fontSize={30}/>
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
      justifyContent: 'center',
      marginTop: window.height*.04,
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
      marginTop: window.height*.005,
      marginLeft: window.width*.07,
    },
    searchText: {
      fontSize: 24,
      color: '#212121',
      fontFamily: 'Montserrat-Bold',
      marginLeft: window.width*.01,
      marginBottom: window.height*0.01,
    },
    rowBox: {
      width: window.width*.75, 
      flexDirection: 'row',
      marginLeft: window.width*.07,
    },
    bigText: {
      fontSize: 22, 
      fontFamily: 'Montserrat-Regular', 
      color: '#212121',
      marginTop: window.height*.05,
      textAlign: 'left',
      marginLeft: window.width*.07,
    },
    quantityText: {
      fontSize: 22, 
      fontFamily: 'Montserrat-Regular', 
      color: '#212121',
      marginTop: window.height*.055,
      textAlign: 'left',
      marginLeft: window.width*.07,
    },
    package:{
      width: 25,
      height: 25,
      marginTop: window.height*0.035,
      marginLeft: -window.width*0.41,
    },
    button: {
      marginTop: -window.height*0.02,
    }
  });
  
  
