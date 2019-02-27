import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

let backgroundColor;

export default class PrimaryButton extends React.Component {
  onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
         <TouchableOpacity 
            style={[styles.buttonContainer, {backgroundColor: this.props.backgroundColor}, {height: this.props.height}]}
            onPress={this.props.onPress}>
            <Text style = {[styles.title, {fontSize: this.props.fontSize}]}>{this.props.title}</Text>
         </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 20,
    justifyContent: 'center', 
    alignItems: 'center',
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000000', 
    shadowOpacity: 0.25, 
    shadowRadius: 5,
  },
  title:{
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: 35,
    marginRight: 35,
    
  }
});
