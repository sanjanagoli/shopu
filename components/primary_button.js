import React from 'react';
import { StyleSheet, Text, View, Button, font } from 'react-native';

let backgroundColor;

export default class PrimaryButton extends React.Component {
  onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View>
         <View style={[styles.buttonContainer, {backgroundColor: this.props.backgroundColor}, {height: this.props.height}]}>
            <Text style = {[styles.title, {fontSize: this.props.fontSize}]}>{this.props.title}</Text>
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
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
    top: 225,
    justifyContent: 'center',
  },
  title:{
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    marginLeft:20,
    marginRight:20,
    
  }
});
