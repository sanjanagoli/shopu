import React from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';

textLayout = () => {
  let data=["Username", "Password", "Phone Number", "Email"];
  let dataMap = data.map((item) => {
    return(
      <View>
        <Text style={styles.subHeader}>{item}</Text>
        <View style={styles.lineStyle}/>
      </View>
    )
  })
  return dataMap;
}

export default class Register extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.peachBox}>
          <Text style={styles.header}>Register Now!</Text>
          <View style={styles.whiteBox}>
            <View>
              {textLayout()}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  peachBox: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height*.60,
    backgroundColor: '#FF715B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteBox: {
    flexDirection: 'column',
    width: Dimensions.get("screen").width*.91,
    height: Dimensions.get("screen").height*.65,
    shadowColor: '#000000',
    shadowOffset: {
        width: 0,
        height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  purpleBox: {
    flex: 1,
    width: Dimensions.get("screen").width,
    height: 172,
    backgroundColor: '#605DF1',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
  },
  blueBox: {
    flex: 1,
    width: 490,
    height: 136,
    position: 'absolute',
    left: -20,
    top: 10,
    backgroundColor: '#64B6F2',
    transform: [{rotateZ: '-6.5deg'}],
  },
  header: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 60,
    marginTop: 230,
    textAlign: 'center',
    //width: Dimensions.get('screen').width,
  },
  subHeader:{
    fontFamily: 'Arial',
    fontSize: 27,
    marginBottom: 40,
    color: '#605DF1',
  },
  lineStyle: {
    width: 280,
    height: 3, 
    backgroundColor: '#605DF1', 
    marginBottom: 20,
  },
  submitButton: {
      position:'absolute',
      width: 240,
      height: 65,
      left: 40,
      top: 590,
      marginLeft:30,
      marginRight:30,
      backgroundColor:'#FF715B',
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 5,
      shadowOpacity: 1.0
  },
  submitText: {
    position: 'absolute',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    top: 605,
    left: 137,
    fontSize: 30,
    fontFamily: 'Arial',
    color: '#FFFFFF',
    fontWeight: 'bold',
  }
});
