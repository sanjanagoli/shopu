import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Toolbar from './../components/Toolbar';


  

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.orangeBox}/>
            <Toolbar navigation={this.props.navigation}/>
            <Text style = {styles.header}>Thank U for Shopping!</Text>
          <View style={styles.blueBox}>
            <View style={{flex: 1, flexDirection: 'row' }}>
              <View style = {styles.boxStyle1}>
                <Text style = {styles.boxText}>Requester:</Text>
                <Text style = {styles.boxText}>Ijemma</Text>
              </View>   
            </View>
            <View style = {styles.boxStyle}>
              <View>
                <Text style = {styles.boxText}>Requester Venmo: </Text>
                <Text style = {styles.boxText}>@Ijemma</Text>
              </View>   
            </View>
            <View style = {styles.boxStyle}>
              <View>
                <Text style = {styles.boxText}>Venmo: </Text>
                <Text style = {styles.boxText}>$3.00</Text>
              </View>   
            </View>
          </View>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  orangeBox: {
    position: 'absolute',
    zIndex: 0,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height*.50,
    backgroundColor: '#FF715B',
    alignItems: 'center',
  },
  header: {
    fontSize: 50,
    color:  '#fff',
    textAlign: 'center',
    width: Dimensions.get("screen").width,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: Dimensions.get("screen").height*.02,
  },
  blueBox: {
    marginTop: Dimensions.get("screen").height*.04,
    width: Dimensions.get("screen").width* .9,
    height: Dimensions.get("screen").height*.50,
    backgroundColor: '#605DF1',
    alignItems: 'center',
  },
  boxText: {
    fontSize: 30,
    color:  '#fff',
    textAlign: 'left',
    width: Dimensions.get("screen").width*.9,
    fontFamily: 'Montserrat-Regular',
    marginLeft: Dimensions.get("screen").width*.03,
  },
  boxStyle:{
    flex: 1,
    flexDirection: 'row',
    marginTop: Dimensions.get("screen").height*.03,
    marginLeft: Dimensions.get("screen").width*0.20,
  },
  boxStyle1:{
    marginTop: Dimensions.get("screen").height*.05,
    marginLeft: Dimensions.get("screen").width*0.20,
  }
});
