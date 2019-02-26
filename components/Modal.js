import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';


export default class App extends React.Component {

    insertCheck=() => {
        <Image source ={require('./../assets/images/check.png')} style={styles.check} />
    }

  render() {
    return ( 
        <View style={styles.container}>
            <View style = {styles.whiteBox}>
                <Image source ={require('./../assets/images/x.png')} style={styles.x} />
                <Text style={styles.header}>Select Your Status</Text>
                <View style = {styles.rectangles}>
                    <TouchableOpacity onPress={this.insertCheck}>
                        <Image source ={require('./../assets/images/checkBox.png')} style={styles.checkBox} />
                    </TouchableOpacity>
                    <Text style={styles.rectangleText}>Going to Store</Text>
                </View>
                <View style = {styles.rectangles}>
                    <TouchableOpacity onPress={this.insertCheck}>
                        <Image source ={require('./../assets/images/checkBox.png')} style={styles.checkBox} />
                    </TouchableOpacity>
                    <Text style={styles.rectangleText}>Checking Out</Text>
                </View>
                <View style = {styles.rectangles}>
                    <TouchableOpacity onPress={this.insertCheck}>
                        <Image source ={require('./../assets/images/checkBox.png')} style={styles.checkBox} />
                    </TouchableOpacity>
                    <Text style={styles.rectangleText}>En Route</Text>
                </View>
                <View style = {styles.rectangles}>
                    <TouchableOpacity onPress={this.insertCheck}>
                        <Image source ={require('./../assets/images/checkBox.png')} style={styles.checkBox} />
                    </TouchableOpacity>
                    <Text style={styles.rectangleText}>Delivered</Text>
                </View>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(92, 92, 92, 0.50)',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get("screen").height,
    width:Dimensions.get("screen").width,
  },
  whiteBox: {
      backgroundColor: '#fff',
      width:Dimensions.get("screen").width*.9,
      height: Dimensions.get("screen").height*.6,
      justifyContent: 'center',
      alignItems: 'center',
  },
  rectangles: {
    backgroundColor: '#605DF1',
    marginTop: 15,
    width: Dimensions.get("screen").width*.8,
    height: Dimensions.get("screen").height*.09,
    shadowOffset: { width: 8, height: 4},
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangleText:{
    fontSize: 30,
    color:  '#fff',
    fontFamily: 'Montserrat-Regular',
    marginLeft: Dimensions.get("screen").width*.1,
  },
  checkBox: {
    left:  -140,
    position: 'absolute',
    width: Dimensions.get("screen").width*.09,
    height: Dimensions.get("screen").height*.04,
  },
  check: {
    left:  -140,
    position: 'absolute',
    width: Dimensions.get("screen").width*.09,
    height: Dimensions.get("screen").height*.04,
  },
  header: {
    fontSize: 35,
    color:  '#6DC4E0',
    textAlign: 'center',
    width: Dimensions.get("screen").width,
    fontFamily: 'Montserrat-Regular',
    margin: '5% 5%',
  },
  x:{
    width: 25,
    height: 25,
    marginRight: Dimensions.get("screen").width*.8,
    marginTop: Dimensions.get("screen").height*.01,
  },
});
