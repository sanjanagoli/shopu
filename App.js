import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          vertical={true}
          data={[{key: 'Username'}, {key: 'Password'}, {key: 'Phone Number'}, {key: 'Email'}]}
            renderItem={
              ({item}) => {
                return(
                    <View>
                      <Text style={styles.subHeader}>{item.key}</Text>
                      <View style={styles.lineStyle}/>
                    </View>
                  )
                }
              }

         />
         
         <View style={styles.purpleBox}/>
         <Text style={styles.header}>Register Now</Text>

         <View style={styles.submitButton}/>
         <Text style={styles.submitText}>Submit!</Text>

         
        {/* <View>
          <View style={styles.purpleBox}/>
          <Text style={styles.header}>Register Now</Text>
        </View>
        <FlatList
          vertical={true}
          data={[{key: 'Username'}, {key: 'Password'}, {key: 'Phone Number'}, {key: 'Email'}]}
            renderItem={
              ({item}) => {
                return(
                    <View>
                      <Text style={styles.subHeader}>{item.key}</Text>
                    </View>
                  )
                }
              }

            /> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  purpleBox: {
    flex: 1,
    width: Dimensions.get("screen").width,
    height: 170,
    backgroundColor: '#605DF1',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
  },
  header: {
    position: 'absolute',
    top: 17,
    fontSize: 65,
    fontFamily: 'Arial',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    width: Dimensions.get("screen").width,
    height: 186,
    color: '#fff',
  },
  subHeader:{
    left: 30,
    fontFamily: 'Arial',
    fontSize: 27,
    marginBottom: 55,
    top: 190,
    color: '#FF715B',
  },
  lineStyle: {
    width: 280,
    height: 3, backgroundColor: '#6DC4E0', 
    top: 180, 
    //right: 0,
    marginBottom: 10,
    left: 40,
  },

  submitButton: {
      position:'absolute',
      width: 240,
      height: 65,
      paddingTop:15,
      left: 40,
      top: 590,
      paddingBottom:15,
      marginLeft:30,
      marginRight:30,
      backgroundColor:'#FF715B',
      borderRadius:50,
      borderWidth: 1,
      borderColor: '#FF715B',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
  },

  submitText: {
    position: 'absolute',
    // width: 156,
    // height: 37,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    top: 605,
    left: 137,
    fontSize: 30,
    fontFamily: 'Arial',
    color: '#FFFFFF',
  }

});
