import React from 'react';
import { StyleSheet, Text, View, Button, font, TouchableOpacity, Dimensions } from 'react-native';

let backgroundColor;

export default class CTAbutton extends React.Component {

    buttonPress=() => {
    }
  
 
  render() {
    return (
        <View>
            <View styles = {styles.blueBox}/>
                <TouchableOpacity onPress={this.buttonPress}>
                    <View style={[styles.buttonContainer, {backgroundColor: this.props.backgroundColor}, {height: this.props.height}]}>
                        <Text style = {[styles.title, {fontSize: this.props.fontSize}]}>{this.props.title}</Text>   
                    </View>
                </TouchableOpacity>
        </View>
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
  },
  blueBox: {
    backgroundColor: '#6DC4E0',
    width: Dimensions.get("screen").width*.9,
    height: 80,
    transform:([{ rotateZ:'-5deg'}]),
    position: 'absolute',
    marginTop: Dimensions.get("screen").height*.26,
  },
});
