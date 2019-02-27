import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isGoingToStore: false, 
            isCheckingOut: false, 
            isEnRoute: false, 
            isDelivered: false
        };
    }

    insertCheckGoingToStore=() => {
            this.setState(previousState => (
                { isGoingToStore: !previousState.isGoingToStore}
            ))
        }
    
    insertCheckCheckingOut=() => {
        this.setState(previousState => (
            { isCheckingOut: !previousState.isCheckingOut}
        ))
    }
    
    insertCheckEnRoute=() => {
        this.setState(previousState => (
            { isEnRoute: !previousState.isEnRoute}
        ))
    }

    insertCheckDelivered=() => {
        this.setState(previousState => (
            { isDelivered: !previousState.isDelivered}
        ))
    }

    renderGoingToStore = () => {
            if (this.state.isGoingToStore) {
                return (<Image source ={require('./../assets/images/check.png')} style={styles.check} />)
            }
            return (<Image source ={require('./../assets/images/checkbox.png')} style={styles.checkBox} />)
    }

    renderCheckingOut = () => {
        if (this.state.isCheckingOut) {
            return (<Image source ={require('./../assets/images/check.png')} style={styles.check} />)
        }
        return (<Image source ={require('./../assets/images/checkbox.png')} style={styles.checkBox} />)
    }

    renderEnRoute = () => {
        if (this.state.isEnRoute) {
            return (<Image source ={require('./../assets/images/check.png')} style={styles.check} />)
        }
        return (<Image source ={require('./../assets/images/checkbox.png')} style={styles.checkBox} />)
    }

    renderDelivered = () => {
        if (this.state.isDelivered) {
            return (<Image source ={require('./../assets/images/check.png')} style={styles.check} />)
        }
        return (<Image source ={require('./../assets/images/checkbox.png')} style={styles.checkBox} />)
    }



  render() {
    return ( 
        <View style={styles.container}>
            <View style = {styles.whiteBox}>
                <Image source ={require('./../assets/images/x.png')} style={styles.x} />
                <Text style={styles.header}>Select Your Status</Text>
                <View style = {styles.rectangles}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft:Dimensions.get("screen").width*.03}}>
                        <TouchableOpacity onPress={this.insertCheckGoingToStore}>
                            {this.renderGoingToStore()}
                        </TouchableOpacity>
                        <Text style={styles.rectangleText}>Going to Store</Text>
                    </View>
                </View>
                <View style = {styles.rectangles}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft:Dimensions.get("screen").width*.03 }}>
                        <TouchableOpacity onPress={this.insertCheckCheckingOut}>
                            {this.renderCheckingOut()}
                        </TouchableOpacity>
                        <Text style={styles.rectangleText}>Checking Out</Text>
                    </View>
                </View>
                <View style = {styles.rectangles}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginRight: Dimensions.get("screen").width*.18,marginLeft:Dimensions.get("screen").width*.03 }}>
                        <TouchableOpacity onPress={this.insertCheckEnRoute}>
                            {this.renderEnRoute()}
                        </TouchableOpacity>
                        <Text style={styles.rectangleText}>En Route</Text>
                    </View>
                </View>
                <View style = {styles.rectangles}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginRight: Dimensions.get("screen").width*.18, marginLeft:Dimensions.get("screen").width*.03 }}>
                        <TouchableOpacity onPress={this.insertCheckDelivered}>
                            {this.renderDelivered()}
                        </TouchableOpacity>
                        <Text style={styles.rectangleText}>Delivered</Text>
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
  checkBox: {
    width: Dimensions.get("screen").width*.09,
    height: Dimensions.get("screen").height*.04,
  },
  check: {
    width: Dimensions.get("screen").width*.09,
    height: Dimensions.get("screen").height*.04,
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
