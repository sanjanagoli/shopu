import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TextInput} from 'react-native';
import PrimaryButton from './../components/PrimaryButton';
import OrangeBackground from './../components/OrangeBackground';
import Toolbar from '../components/Toolbar';
import StatusUpdateModal from '../components/StatusUpdateModal';
import firebase from 'firebase';
import {connect} from 'react-redux';
import {currentDelivery} from '../reducers/completedReducer';

const window = Dimensions.get("window")

class RequestStatus extends React.Component { 

  constructor(props) {
    super(props);
      this.state = {
        userArray: {

        }, 
        userId: null,
        isConfirmed: null,
      };
    
  };

  componentWillMount() {
    //writeNewPost(5, 'username', 'user@email.com', 'user', 'name', 'location');
    const { params } = this.props.navigation.state;
    this.fetchData();
    console.log('hi', params)
    this.setState({ userId: params.item.buyer, isConfirmed: params.item.confirmedEmail });
    this.props.currentDelivery(params.item.id)
  }

  fetchData = async () => {
      
      var data2 = [];
      
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
      });

  }
  
  static navigationOptions = {
    header: null,
    };
  
  
  statusUpdate = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  renderModal = (phoneNumber) => {
    if (this.state.modal){
      return <StatusUpdateModal onPress={this.statusUpdate} phone={phoneNumber}/>
      }
    else {
      return null
    }
  }

  browseOptions = () => {
    this.props.navigation.navigate('ShoppingList')
  }


  getFirstName = () => {
    for (i = 0; i < this.state.userArray.length; i++) {
      if(this.state.userArray[i].key == this.state.userId) {
        return this.state.userArray[i].value.firstName;
      }
    }
  }

  getName = () => {
    for (i = 0; i < this.state.userArray.length; i++) {
      if(this.state.userArray[i].key == this.state.userId) {
        return this.state.userArray[i].value.firstName + " " + this.state.userArray[i].value.lastName;
      }
    }
  }

  getEmail = () => {
    for (i = 0; i < this.state.userArray.length; i++) {
      if(this.state.userArray[i].key == this.state.userId) {
        return this.state.userArray[i].value.email;
      }
    }
  }

  getPhone = () => {
    for (i = 0; i < this.state.userArray.length; i++) {
      if(this.state.userArray[i].key == this.state.userId) {
        return this.state.userArray[i].value.phoneNumber;
      }
    }
  }

  getLocation = () => {
    for (i = 0; i < this.state.userArray.length; i++) {
      if(this.state.userArray[i].key == this.state.userId) {
        return this.state.userArray[i].value.location;
      }
    }
  }

  render() {
    const { params } = this.props.navigation.state;

    if(!this.state.isConfirmed) {
      return (
        <View style={styles.container}>
          <Toolbar/>
            <View style={styles.mainView}>
              <View style={styles.whiteCard}>
                  <Text style={styles.itemText}>Waiting for Confirmation!</Text>
                  <Text style={styles.descriptionText}>Come back when {this.getName()}{"'"}s mail request is confirmed!</Text>
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
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.generalText}>{this.getName()}</Text>
                  <Text style={styles.generalText}>{this.getEmail()}</Text>
                  <Text style={styles.generalText}>{this.getPhone()}</Text>
                  <Text style={styles.generalText}>{this.getLocation()}</Text>
                </View>
                <View style={styles.button}>
                    <PrimaryButton onPress={this.statusUpdate} title={'Status Update'} backgroundColor={ '#19C6D1'} height={65} fontSize={28}/>
                </View>
                {this.renderModal(this.getPhone())}      
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
    marginTop: -window.height*.02
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
    marginTop: window.height*.08,
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
    marginTop: -window.height*.4,
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
  button: {
    marginTop: -window.height*.25,
  }
});

const mapDispatchtoProps = {
  currentDelivery
}

export default connect(null, mapDispatchtoProps)(RequestStatus)
