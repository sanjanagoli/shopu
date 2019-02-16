import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



export default class App extends React.Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
         <View style={styles.RectangleShapeViewOne}></View>
         <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color = '#fff'
          
          />
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
  RectangleShapeViewOne: {
    marginTop: 5,
    width: 221,
    height: 56,
    top: 600,
    borderRadius: 2,
    backgroundColor: '#FF715B',
    position: 'absolute',
    },
    buttonContainer: {
      margin: 20,
      top: 225,
    },
  
});
