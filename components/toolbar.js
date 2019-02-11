import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <View> 
            <View style={styles.viewNavigation} >
                <Text style={styles.navigation}>Now playing...</Text>
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
    viewNavigation: {
    height: 70,
    backgroundColor: '#a9a9a9',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    }
});
    

