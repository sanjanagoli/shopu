import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TextInput} from 'react-native';
import PrimaryButton from './../components/PrimaryButton';
import OrangeBackground from './../components/OrangeBackground';
import DropDown from './../components/DropDown';
import Toolbar from '../components/Toolbar';

const window = Dimensions.get("window")

export default class RequestProfile extends React.Component { 
  static navigationOptions = {
    header: null,
    };
  
  
  statusUpdate = () => {
    this.props.navigation.navigate('StatusModal')
  }

  browseOptions = () => {
    this.props.navigation.navigate('ShoppingList')
  }

  constructor(props) {
    super(props);
      this.state = { pending: false, item:
        {
          firstName: 'Ijemma',
          lastName: 'Harathi',
          location: 'River: 107 Byrne II',
          phoneNumber: '555-555-5555',
          email: 'iso@dartmouth.edu',
          packageSize: 'Heavy'
        }
      };
  }

  setPicker = (itemValue) => {
    this.setState({ pickerSelection: itemValue})
  }
  
  render() {
    if(this.state.pending) {
      return (
        <View style={styles.container}>
          <Toolbar/>
            <View style={styles.mainView}>
              <View style={styles.whiteCard}>
                  <Text style={styles.itemText}>Waiting for Confirmation!</Text>
                  <Text style={styles.descriptionText}>Come back when {this.state.item.firstName}{"'"}s mail request is confirmed!</Text>
                </View>
              </View>
            </View>
       
      );
    } else {
      return (
        <View style={styles.container}> 
          <Toolbar/>
            <View style={styles.mainView}>
              <View style={styles.whiteCard}>
                  <Text style={styles.itemText}>Your Pickup is Confirmed!</Text>
                  <View style={styles.textContainer}>
                  <Text style={styles.NameText}>{this.state.item.firstName} {this.state.item.lastName}</Text>
                  <Text style={styles.PackageLocationText}>{this.state.item.packageSize} </Text>
                  <Text style={styles.PackageLocationText}>{this.state.item.location}</Text>
                  <Text style={styles.EmailText}>{this.state.item.email}</Text>
                  <Text style={styles.PhoneText}>{this.state.item.phoneNumber}</Text>
                  <PrimaryButton onPress={this.statusUpdate} title={'Status Update'} backgroundColor={ '#19C6D1'} height={65} fontSize={28}/>
                </View>    
              </View>
            </View>
        </View>
      );
   }   
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
    marginTop: window.height*.02
  },
  subView: {
    flexDirection: 'row', 
    paddingHorizontal: window.width*.05,
    marginTop: window.height*.02
  },
  textContainer: {
    textAlign: 'left', 
    marginTop: Dimensions.get('screen').height*.05
  },
  toolbar: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: window.height*.05, 
    paddingHorizontal: window.width*.05
  },
  whiteCard: {
    width: window.width*.9,
    height: window.height*.65,
    marginTop: window.height*.03,
    backgroundColor: '#fff',
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#19C6D1'
  },
  itemText: {
    fontSize: 40,
    fontFamily: 'Montserrat-Bold',
    color: '#262626',
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 25,
    fontFamily: 'Montserrat-Light',
    color: '#262626',
    marginHorizontal: Dimensions.get('screen').width*0.03,
    marginTop: window.height*.1,
    marginLeft: window.width*.07,
  },
  NameText: {
    fontSize: 24,
    fontFamily: 'Montserrat-Medium',
    color: '#262626',
    marginTop: window.height*.01,
    marginLeft: window.width*0.07,
  },
  EmailText: {
    fontSize:18,
    fontFamily: 'Montserrat-Light',
    color: '#262626',
    marginLeft: window.width*0.07,
  },
  PhoneText: {
    fontSize:18,
    fontFamily: 'Montserrat-Light',
    color: '#262626',
    marginLeft: window.width*0.07,
    marginBottom: window.height*0.04,
  },
  PackageLocationText: {
    fontSize:18,
    fontFamily: 'Montserrat-Medium',
    color: '#262626',
    marginLeft: window.width*0.07,
  },
});
