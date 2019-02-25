import React from 'react';
import { StyleSheet, Text, View, Button, font, TouchableOpacity } from 'react-native';

let backgroundColor;

export default class PrimaryButton extends React.Component {
 
  render() {
    return (
        <TouchableOpacity>
            <View style={[styles.buttonContainer, {backgroundColor: this.props.backgroundColor}, {height: this.props.height}]}>
                <Text style = {[styles.title, {fontSize: this.props.fontSize}]}>{this.props.title}</Text>
            </View>
        </TouchableOpacity>
         
    );
  }
}

const styles = StyleSheet.create({
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
    
  }
});
