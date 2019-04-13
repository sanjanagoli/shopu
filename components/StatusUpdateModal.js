import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';


export default class StatusUpdateModal extends React.Component {

  render() {
    return ( 
        <View style={styles.container}>
            <View style = {styles.whiteBox}>
                <TouchableOpacity>
                    <Image source ={require('./../assets/images/x.png')} style={styles.x} />
                </TouchableOpacity>
                <Text style={styles.header}>Select Your Status</Text>
                <TouchableOpacity>
                    <View style = {styles.rectangles}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.rectangleText}>Going to Hinman</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style = {styles.rectangles}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.rectangleText}>In Line</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style = {styles.rectangles}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.rectangleText}>Picked Up and En Route</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style = {styles.rectangles}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.rectangleText}>Delivered</Text>
                        </View>
                    </View>

                </TouchableOpacity>
                
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
      position: 'absolute',
  },
  rectangles: {
    backgroundColor: '#605DF1',
    marginTop: Dimensions.get("screen").height*.01,
    marginBottom: Dimensions.get("screen").height*.02,
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
    marginLeft: Dimensions.get("screen").width*.05,
  },
  header: {
    fontSize: 33,
    color:  '#6DC4E0',
    textAlign: 'center',
    width: Dimensions.get("screen").width,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: '2%',
    marginTop: '2%',
  },
  x:{
    width: Dimensions.get("screen").width*.06,
    height: Dimensions.get("screen").width*.06,
    marginRight: Dimensions.get("screen").width*.73,
    marginTop: Dimensions.get("screen").height*.01,
  },
});
