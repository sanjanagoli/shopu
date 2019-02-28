import React from 'react';
import { StyleSheet, Text, View, Button, font, TouchableOpacity, Dimensions } from 'react-native';

let backgroundColor;

export default class CTAbutton extends React.Component {

    buttonPress=() => {
      console.log('here')
    }
  
 
  render() {
    return (
        <View>
          <TouchableOpacity onPress={this.buttonPress}>
            <View style= {[styles.blueBox, {height: this.props.height}]}/>
            <View style={[styles.buttonContainer, {backgroundColor: this.props.backgroundColor}, {height: this.props.height}]}>
                <Text style = {[styles.title, {fontSize: this.props.fontSize}]}>{this.props.title}</Text>   
            </View>
          </TouchableOpacity>
        </View>
    );
    
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    margin: 20,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  title:{
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: 35,
    marginRight: 35, 
  },
  blueBox: {
    backgroundColor: '#6DC4E0',
    width: Dimensions.get("screen").width*.33,
    transform:([{ rotateZ:'5deg'}]),
    position: 'absolute',
    marginTop: Dimensions.get("screen").height*.025,
    marginLeft: Dimensions.get("screen").width*.06,
  },
});
