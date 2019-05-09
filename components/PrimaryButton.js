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
            style={[styles.buttonContainer, {backgroundColor: this.props.backgroundColor}, {height: this.props.height}, {borderColor: this.props.borderColor} ,{borderBottomWidth: this.props.borderBottomWidth}, {borderWidth: this.props.borderWidth}, {width: this.props.width}]}
            onPress={this.props.onPress}>
            <Text style = {[styles.title, {fontSize: this.props.fontSize}]}>{this.props.title}</Text>
         </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 50,
    justifyContent: 'center', 
    alignItems: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#000000', 
    shadowOpacity: 0.25, 
    shadowRadius: 5,
    borderRadius: 5,
  },
  title:{
    color: '#ffffff',
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: 35,
    marginRight: 35,
    
  }
});
