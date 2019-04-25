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
        <View style={styles.whiteBox}>
            <View style={{marginLeft: Dimensions.get('screen').width*.8}}>
              <TouchableOpacity onPress={this.onPress}>
                <Image style={styles.editPencil} source={require('./../assets/images/edit_pencil_black.png')} />
              </TouchableOpacity>
            </View>           
            <View>
              <View style={styles.textIcon}>
                <TextInput style={styles.subHeader} editable={this.state.editor} placeholder={'Email'}placeholderTextColor={'#2E2E2F'}></TextInput>
                <View style={styles.lineStyle}/>
              </View>  
              <View style={styles.textIcon}>
                <TextInput style={styles.subHeader} editable={this.state.editor} placeholder={'Password'}placeholderTextColor={'#2E2E2F'}></TextInput>
                <View style={styles.lineStyle}/>
              </View>  
              <View style={styles.textIcon}>
                <TextInput style={styles.subHeader} editable={this.state.editor} placeholder={'Phone Number'}placeholderTextColor={'#2E2E2F'}></TextInput>
                <View style={styles.lineStyle}/>
              </View>
              <View style={styles.textIcon}>
                <TextInput style={styles.subHeader} editable={this.state.editor} placeholder={'Venmo Username'}placeholderTextColor={'#2E2E2F'}></TextInput>
                <View style={styles.lineStyle}/>
              </View>  
              <View style={styles.textIcon}>
                <TextInput style={styles.subHeader} editable={this.state.editor} placeholder={'Dorm/Room Number'}placeholderTextColor={'#2E2E2F'}></TextInput>
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
    alignItems: 'center',
  },
  textIcon: {
    marginBottom: Dimensions.get("screen").height*.05,
  },
  buttonStyle: {
    marginTop: Dimensions.get('screen').height*.008,
    width: Dimensions.get('screen').width*.5,
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
    marginTop: Dimensions.get("screen").height*.2,
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
    marginTop: Dimensions.get('screen').height*0.005,
  },
});
