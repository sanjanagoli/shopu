import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <View> 
            <View style={styles.viewToolbarBackground} >
                <View style = {styles.viewToolbarCart}> </View>
                <View style = {styles.viewToolbarHome}> </View>
                <View style = {styles.viewToolbarPerson}> </View>
            </View>
        </View> 
          );
        }
      }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    viewToolbarBackground: {
    height: 65,
    backgroundColor: '#ffffff',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    },
    viewToolbarCart: {
    position: 'absolute',
    bottom: 12.5,
    right: 42.5,
    left: 82.5,
    },
    viewToolbarHome: {
    position: 'absolute',
    bottom: 12.5,
    right: 207.5,
    left: 167.5,
    },
    viewToolbarPerson: {
    position: 'absolute',
    bottom: 12.5,
    right: 332.5,
    left: 292.5,
    }
});
    

