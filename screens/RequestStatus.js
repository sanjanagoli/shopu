import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TextInput} from 'react-native';
import PrimaryButton from './../components/PrimaryButton';
import OrangeBackground from './../components/OrangeBackground';
import Toolbar from '../components/Toolbar';
import firebase from 'firebase';

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
    this.state = {
      userArray: {}
    } 
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
          <OrangeBackground/>
          <Toolbar/>
            <TouchableOpacity style={styles.subView} onPress={this.browseOptions}>
              <Image style={styles.arrowIcon}
                  source={require('./../assets/images/back_arrow.png')} />
              <Text style={styles.browseText}>See Other Deliveries</Text>
            </TouchableOpacity>
            <View style={styles.mainView}>
              <View style={styles.whiteCard}>
                <View style={styles.itemBox}>
                  <Text style={styles.itemText}>Waiting for Confirmation</Text>
                </View>
                <View style={{textAlign: 'center'}}>
                  <Text style={styles.descriptionText}>Come back when {this.getFirstName(userId)}{"'"}s mail request is confirmed!</Text>
                </View>
                <View style={styles.addToCartButton}>
                    <PrimaryButton onPress={this.statusUpdate} title={'Status Update'} backgroundColor={ '#6DC4E0'} height={65} fontSize={28}/>
                </View>
              </View>
            </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <OrangeBackground/>
          <Toolbar/>
            <TouchableOpacity style={styles.subView} onPress={this.browseOptions}>
              <Image style={styles.arrowIcon}
                  source={require('./../assets/images/back_arrow.png')} />
              <Text style={styles.browseText}>See Other Deliveries</Text>
            </TouchableOpacity>
            <View style={styles.mainView}>
              <View style={styles.whiteCard}>
                <View style={styles.itemBox}>
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
    backgroundColor: '#fff',
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
  arrowIcon: {
    width: 30,
    height: 25,
  },
  browseText: {
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
    marginLeft: window.width*.02
  },
  whiteCard: {
    width: window.width*.9,
    height: window.height*.65,
    backgroundColor: '#fff',
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    alignItems: 'center',
  },
  itemBox: {
    width: window.width*.8,
    height: window.height*.22,
    backgroundColor: '#605DF1',
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    marginTop: window.height*.02,
    justifyContent: 'center'
  },
  
  itemText: {
    fontSize: 40,
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: window.height*.02
  },
  descriptionText: {
    fontSize: 40,
    fontFamily: 'Montserrat-SemiBold',
    color: '#605DF1',
    marginHorizontal: Dimensions.get('screen').width*0.03,
    marginTop: window.height*.05
  },
  generalText: {
    fontSize: 30,
    fontFamily: 'Montserrat-SemiBold',
    color: '#605DF1',
    marginHorizontal: Dimensions.get('screen').width*0.03,
    marginTop: window.height*.01
  },
  addToCartButton: {
    marginTop: window.height*.08
  },
  otherAddToCart: {
    marginTop: window.height*.1
  },
});

