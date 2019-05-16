import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TextInput} from 'react-native';
import PrimaryButton from './../components/PrimaryButton';
import Toolbar from '../components/Toolbar';
import firebase from 'firebase';

const database = firebase.database();
var newUserKey = firebase.database().ref().child('posts').push().key

export default class AccountProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editor: false };
    this.state = { email: '', password: '', phoneNumber: '', venmo: '', location: ''};
  }

  static navigationOptions = {
    header: null,
    };

  onPress = () => {
    this.setState({
      editor: !this.state.editor
    })
    database.ref('users/' + 'user'+newUserKey).set({
      email: this.state.email,
      password: this.state.password,
      phoneNumber: this.state.phoneNumber,
      venmo: this.state.venmo,
      location: this.state.location,
    })
  }

  updatingUser = () => {
    database.ref('users/' + 'user'+newUserKey).set({
      email: this.state.email,
      password: this.state.password,
      phoneNumber: this.state.phoneNumber,
      venmo: this.state.venmo,
      location: this.state.location,
    })
    }

    goBack = () => {	   
      this.props.navigation.navigate('ShopSearch')
    }	      

  render() {
    return (
      <View style={styles.container}>
        <Toolbar title={'Account Profile'} pageType={'Profile'}/>
        <TouchableOpacity style={styles.subView} onPress={this.goBack}>	            
              <Image style={styles.arrowIcon}	             
                  source={require('./../assets/images/left-arrow.png')} />	                 
              <Text style={styles.backText}>Back</Text>	              
        </TouchableOpacity>
        <View style={styles.whiteBox}>
            <View style={{marginLeft: Dimensions.get('screen').width*.8}}>
              <TouchableOpacity onPress={this.onPress}>
                <Image style={styles.editPencil} source={require('./../assets/images/edit_pencil_black.png')} />
              </TouchableOpacity>
            </View>           
            <View>
              <View style={styles.textIcon}>
                <TextInput style={styles.subHeader} 
                editable={this.state.editor} 
                placeholder={'Email'}
                placeholderTextColor={'#2E2E2F'}
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}>
                </TextInput>
                <View style={styles.lineStyle}/>
              </View>  
              <View style={styles.textIcon}>
                <TextInput style={styles.subHeader} 
                editable={this.state.editor} 
                placeholder={'Password'}
                placeholderTextColor={'#2E2E2F'}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}>
                </TextInput>
                <View style={styles.lineStyle}/>
              </View>  
              <View style={styles.textIcon}>
                <TextInput style={styles.subHeader} 
                editable={this.state.editor} 
                placeholder={'Phone Number'}
                placeholderTextColor={'#2E2E2F'}
                onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                value={this.state.phoneNumber}>
                </TextInput>
                <View style={styles.lineStyle}/>
              </View>
              <View style={styles.textIcon}>
                <TextInput style={styles.subHeader} 
                editable={this.state.editor} 
                placeholder={'Venmo Username'}
                placeholderTextColor={'#2E2E2F'}
                onChangeText={(venmo) => this.setState({venmo})}
                value={this.state.venmo}>
                </TextInput>
                <View style={styles.lineStyle}/>
              </View>  
              <View style={styles.textIcon}>
                <TextInput style={styles.subHeader} 
                editable={this.state.editor} 
                placeholder={'Dorm/Room Number'}
                placeholderTextColor={'#2E2E2F'}
                onChangeText={(location) => this.setState({location})}
                value={this.state.location}>
                </TextInput>
                <View style={styles.lineStyle}/>
              </View>    
            <View style={{alignItems: 'center'}}>
              <View style={styles.buttonStyle}>
                <PrimaryButton backgroundColor={'#19C6D1'} height={50} title={'Save'} fontSize={24}/>
              </View>
            </View>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    alignItems: 'flex-start',
  },
  textIcon: {
    marginBottom: Dimensions.get("screen").height*.05,
  },
  buttonStyle: {
    marginTop: Dimensions.get('screen').height*.008,
    width: Dimensions.get('screen').width*.6,
  },
  subHeader: {
    color: '#2E2E2F',
    fontFamily: 'Montserrat-Medium',
    fontSize: 20,
    marginLeft: Dimensions.get('screen').width*0.05,
    marginTop: Dimensions.get("screen").height*.02,
    
  },
  whiteBox: {
    flexDirection: 'column',
    width: Dimensions.get("screen").width*.91,
    height: Dimensions.get("screen").height*.6,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    marginTop: Dimensions.get("screen").height*.03,
    marginLeft: Dimensions.get("screen").width*.045,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#19C6D1',
  },
  header:{
    color: '#fff',
    fontFamily: 'Montserrat-Medium',
    fontSize: 46,
    textAlign: 'center',
    width: Dimensions.get("screen").width,
    marginTop: Dimensions.get("screen").height*.07,
  },
  editPencil: {
    width: 27,
    height: 27,
    marginRight: Dimensions.get('screen').width*0.05,
    marginTop: Dimensions.get('screen').height*0.02,
  },
  lineStyle: {
    width: Dimensions.get('screen').width*.7,
    height: 1, 
    backgroundColor: '#2E2E2F', 
    marginLeft: Dimensions.get('screen').width*0.05,
  },
  searchTextBox: {
    flexDirection: 'row',
    width: Dimensions.get('screen').width,
    marginLeft: Dimensions.get('screen').width*.01,
    marginTop: Dimensions.get('screen').width*.08
  },
  searchText: {
    color: '#ffffff',
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    textAlign: 'left',
    marginLeft: Dimensions.get('screen').width*.008,
  },
  leftArrow: {
    width: 20,
    height: 22,
    marginLeft: Dimensions.get('screen').width*.01,
    
  },
  backText: {	 
    fontSize: 18,	   
    fontFamily: 'Montserrat-Regular',	    
    color: '#262626',	   
    marginLeft: Dimensions.get("screen").width*.01,	   
    marginTop: -Dimensions.get("screen").height*.006,
  },
  arrowIcon: {	  
    width: 20,	    
    height: 10,	   
  },
  subView: {	 
    flexDirection: 'row', 	    
    paddingHorizontal: Dimensions.get("screen").width*.05,	    
    marginTop: Dimensions.get("screen").height*.02	   
  },
});
