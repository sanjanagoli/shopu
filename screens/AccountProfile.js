import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TextInput} from 'react-native';
import OrangeBackground from './../components/OrangeBackground';
import PrimaryButton from './../components/PrimaryButton';

export default class AccountProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editor: false }
  }

  static navigationOptions = {
    header: null,
    };

  onPress = () => {
    this.setState({
      editor: !this.state.editor
    })
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
            <View style={{marginLeft: Dimensions.get('screen').width*.8}}>
              <TouchableOpacity onPress={this.onPress}>
                <Image style={styles.editPencil} source={require('./../assets/images/edit_pencil_purple.png')} />
              </TouchableOpacity>
            </View>           
            <View>
              <View style={styles.textIcon}>
                <TextInput style={styles.subHeader} editable={this.state.editor} placeholder={'Dartmouth ID'}placeholderTextColor={'#605DF1'}></TextInput>
                <View style={styles.lineStyle}/>
              </View>  
              <View style={styles.textIcon}>
                <TextInput style={styles.subHeader} editable={this.state.editor} placeholder={'Password'}placeholderTextColor={'#605DF1'}></TextInput>
                <View style={styles.lineStyle}/>
              </View>  
              <View style={styles.textIcon}>
                <TextInput style={styles.subHeader} editable={this.state.editor} placeholder={'Phone Number'}placeholderTextColor={'#605DF1'}></TextInput>
                <View style={styles.lineStyle}/>
              </View>
              <View style={styles.textIcon}>
                <TextInput style={styles.subHeader} editable={this.state.editor} placeholder={'Email'}placeholderTextColor={'#605DF1'}></TextInput>
                <View style={styles.lineStyle}/>
              </View>  
              <View style={styles.textIcon}>
                <TextInput style={styles.subHeader} editable={this.state.editor} placeholder={'Dorm/Room Number'}placeholderTextColor={'#605DF1'}></TextInput>
                <View style={styles.lineStyle}/>
              </View>    
              <View style={{marginBottom: Dimensions.get('screen').height*.06}}>
                <TextInput style={styles.subHeader} editable={this.state.editor} placeholder={'Venmo Username'}placeholderTextColor={'#605DF1'}></TextInput>
                <View style={styles.lineStyle}/>
              </View>    
            </View>
        </View>
        <View style={styles.buttonStyle}>
            <PrimaryButton backgroundColor={'#6DC4E0'} height={40} title={'Save'} fontSize={20}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  textIcon: {
    marginBottom: Dimensions.get("screen").height*.04,
  },
  buttonStyle: {
    marginTop: -Dimensions.get('screen').height*.06,
    width: Dimensions.get('screen').width*.5,
  },
  subHeader: {
    color: '#605DF1',
    fontFamily: 'Montserrat-Medium',
    fontSize: 20,
    marginLeft: Dimensions.get('screen').width*0.05,
    marginTop: Dimensions.get("screen").height*.03,
    
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
    justifyContent: 'flex-start',
    marginTop: Dimensions.get("screen").height*.01,
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
    marginTop: Dimensions.get('screen').height*0.02,
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
    marginTop: Dimensions.get('screen').height*0.005,
  },
});
