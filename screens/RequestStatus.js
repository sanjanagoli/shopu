import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TextInput} from 'react-native';
import PrimaryButton from './../components/PrimaryButton';
import OrangeBackground from './../components/OrangeBackground';
import Toolbar from '../components/Toolbar';
import StatusUpdateModal from '../components/StatusUpdateModal';
import firebase from 'firebase';


const window = Dimensions.get("window")

export default class RequestStatus extends React.Component { 

  constructor(props) {
    super(props);

      this.state = { pending: false, userArray: {}, item:
        {
          firstName: 'Ijemma',
          lastName: 'Harathi',
          location: 'River: 107 Byrne II',
          phoneNumber: '555-555-5555',
          email: 'iso@dartmouth.edu',
          packageSize: 'Heavy'
        }
      };
    
  };

  componentWillMount() {
    //writeNewPost(5, 'username', 'user@email.com', 'user', 'name', 'location');
    this.fetchData();
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

  renderModal = () => {
    if (this.state.modal){
      return <StatusUpdateModal onPress={this.statusUpdate}/>
      }
    else {
      return null
    }
  }

  browseOptions = () => {
    this.props.navigation.navigate('ShoppingList')
  }


  getFirstName = (userId) => {
    for (i = 0; i < this.state.userArray.length; i++) {
      if(this.state.userArray[i].key == userId) {
        return this.state.userArray[i].value.firstName;
      }
    }
  }

  getName = (userId) => {
    for (i = 0; i < this.state.userArray.length; i++) {
      if(this.state.userArray[i].key == userId) {
        return this.state.userArray[i].value.firstName + " " + this.state.userArray[i].value.lastName;
      }
    }
  }

  getEmail = (userId) => {
    for (i = 0; i < this.state.userArray.length; i++) {
      if(this.state.userArray[i].key == userId) {
        return this.state.userArray[i].value.email;
      }
    }
  }

  getPhone = (userId) => {
    for (i = 0; i < this.state.userArray.length; i++) {
      if(this.state.userArray[i].key == userId) {
        return this.state.userArray[i].value.phoneNumber;
      }
    }
  }

  getLocation = (userId) => {
    for (i = 0; i < this.state.userArray.length; i++) {
      if(this.state.userArray[i].key == userId) {
        return this.state.userArray[i].value.location;
      }
    }
  }

  render() {
    const { params } = this.props.navigation.state;
    const isConfirmed = params ? params.item.confirmedEmail : null;
    const userId = params ? params.item.buyer : null;

    if(!isConfirmed) {
      return (
        <View style={styles.container}>
          <Toolbar/>
            <View style={styles.mainView}>
              <View style={styles.whiteCard}>
                  <Text style={styles.itemText}>Waiting for Confirmation!</Text>
                  <Text style={styles.descriptionText}>Come back when {this.getFirstName(userId)}{"'"}s mail request is confirmed!</Text>
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
                  <Text style={styles.generalText}>{this.getName(userId)}</Text>
                  <Text style={styles.generalText}>{this.getEmail(userId)}</Text>
                  <Text style={styles.generalText}>{this.getPhone(userId)}</Text>
                  <Text style={styles.generalText}>{this.getLocation(userId)}</Text>
                </View>
                <View style={styles.otherAddToCart}>
                    <PrimaryButton onPress={this.statusUpdate} title={'Status Update'} backgroundColor={ '#6DC4E0'} height={65} fontSize={28}/>
                </View>
                {this.renderModal()}         
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

