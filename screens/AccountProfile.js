import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Picker} from 'react-native';
import OrangeBackground from './../components/OrangeBackground';
import { TextInput } from 'react-native-gesture-handler';

export default class AccountProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            editUsername: false,
            editPassword: false,
            editPhone: false,
            editEmail: false,
            editBirthday: false,
            language: "dog",
        }
    }

  
  render() {
    return (
        <View style={styles.container}>
            <OrangeBackground/>
            <View style={styles.searchTextBox}>
                <Image source ={require('./../assets/images/left-arrow.png')} style={styles.leftArrow}/>  
                <Text style={styles.searchText}>Back</Text>
            </View>
            <Text style={styles.header}>Account Profile</Text>
            <View style={styles.whiteBox}>
                <View style={styles.textIcon}>
                    <TouchableOpacity onPress={() => this.setState({editUsername: true})}>
                        <Image style={styles.editPencil} source={require('./../assets/images/edit_pencil_purple.png')} />
                    </TouchableOpacity> 
                    <View>
                        <TextInput style={styles.subHeader} editable={this.state.editUsername}>Username</TextInput>
                        <View style={styles.lineStyle}/>
                    </View>  
                </View>
                <View style={styles.textIcon}>
                    <TouchableOpacity onPress={() => this.setState({editPassword: true})}>
                        <Image style={styles.editPencil} source={require('./../assets/images/edit_pencil_purple.png')} />
                    </TouchableOpacity> 
                    <View>
                        <TextInput style={styles.subHeader} editable={this.state.editPassword}>Password</TextInput>
                        <View style={styles.lineStyle}/>
                    </View>  
                </View>
                <View style={styles.textIcon}>
                    <TouchableOpacity onPress={() => this.setState({editPhone: true})}>
                        <Image style={styles.editPencil} source={require('./../assets/images/edit_pencil_purple.png')} />
                    </TouchableOpacity> 
                    <View>
                        <TextInput style={styles.subHeader} editable={this.state.editPhone}>Phone Number</TextInput>
                        <View style={styles.lineStyle}/>
                    </View>  
                </View>
                <View style={styles.textIcon}>
                    <TouchableOpacity onPress={() => this.setState({editEmail: true})}>
                        <Image style={styles.editPencil} source={require('./../assets/images/edit_pencil_purple.png')} />
                    </TouchableOpacity> 
                    <View>
                        <TextInput style={styles.subHeader} editable={this.state.editEmail}>Email</TextInput>
                        <View style={styles.lineStyle}/>
                    </View>  
                </View>
                <View style={styles.textIcon}>
                    <TouchableOpacity onPress={() => this.setState({editBirthday: true})}>
                        <Image style={styles.editPencil} source={require('./../assets/images/edit_pencil_purple.png')} />
                    </TouchableOpacity> 
                    <View>
                        <TextInput style={styles.subHeader} editable={this.state.editBirthday}>Birthday</TextInput>
                        <View style={styles.lineStyle}/>
                    </View>  
                </View>
                <View style={styles.textIcon}>
                    <View>
                        <TextInput style={styles.subHeader} editable={this.state.editUsername}>Username</TextInput>
                        <View style={styles.lineStyle}/>
                    </View>  
                </View>
                
            </View>
            
        </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  textIcon: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  subHeader: {
    color: '#605DF1',
    fontFamily: 'Montserrat-Medium',
    fontSize: 20,
    marginLeft: Dimensions.get('screen').width*0.05,
    marginTop: Dimensions.get("screen").height*.02,
  },
  whiteBox: {
    flexDirection: 'column',
    width: Dimensions.get("screen").width*.91,
    height: Dimensions.get("screen").height*.70,
    shadowColor: '#000000',
    shadowOffset: {
        width: 0,
        height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-around',
    marginTop: Dimensions.get("screen").height*.05,
  },
  header:{
    color: '#fff',
    fontFamily: 'Montserrat-Medium',
    fontSize: 46,
    textAlign: 'center',
    width: Dimensions.get("screen").width,
    marginTop: Dimensions.get("screen").height*0,
  },
  editPencil: {
    width: 27,
    height: 27,
    marginRight: Dimensions.get('screen').width*0.05,
    marginTop: Dimensions.get("screen").height*.02,
  },
  lineStyle: {
    width: Dimensions.get('screen').width*.7,
    height: 1.5, 
    backgroundColor: '#605DF1', 
    marginLeft: Dimensions.get('screen').width*0.05,
  },
  searchTextBox: {
    flexDirection: 'row',
    width: Dimensions.get('screen').width,
    marginLeft: Dimensions.get('screen').width*.01,
    marginTop: Dimensions.get('screen').width*.05
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
    marginTop: Dimensions.get('screen').height*0.005,
  },
});
