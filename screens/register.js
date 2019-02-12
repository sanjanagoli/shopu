import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView, AppRegistry, Dimensions} from 'react-native';

export default class App extends React.Component {
    render(){
        return(
            <View>
                <View style={styles.container}>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      position: 'relative',
      width: Dimensions.get("screen").width,
      height: 350,
      backgroundColor: '#FF715B',

    },
    firstHeader: {
      color: '#fff',
      marginTop: 90,
      marginBottom: 30,
      fontSize: 30,
    },
    subHeader: {
      fontSize: 20,
      marginTop: 10,
      marginBottom: 25,
      color: '#fff'
      
    },
    imageStyle: {
      width: 130,
      height: 130,
      justifyContent: 'space-between',
      marginRight: 10,
      marginLeft: 10,
    },
    imageText: {
      fontSize: 20,
      alignItems: 'center',
      marginRight: 15,
      marginLeft: 30,
    },
  
    navigation: {
      flex: 1,
      zIndex: 10000,
      justifyContent: 'flex-end',
      //height: Dimensions.get("screen").height
      width: Dimensions.get("screen").width,
      height: 40,
      position: 'absolute',
    }
   
  });
  
