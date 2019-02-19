import React from 'react';
import { StyleSheet, Text, View, Button, font } from 'react-native';

let backgroundColor;

export default class PrimaryButton extends React.Component {
  onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
         <View style={[styles.buttonContainer, {backgroundColor: this.props.backgroundColor}, {height: this.props.height}]}>
            <Text style = {[styles.title, {fontSize: this.props.fontSize}]}>{this.props.title}</Text>
         </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 20,
  },
  title:{
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    marginLeft:20,
    marginRight:20,
    
  }
});
