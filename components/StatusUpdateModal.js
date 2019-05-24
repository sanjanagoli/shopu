import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { SMS } from 'expo';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { currentDelivery } from '../reducers/completedReducer';


const database = firebase.database();

class StatusUpdateModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userArray: {

      },
      phone: null,
    };
  };

  componentWillMount = () => {
    if (this.checkingDevice()) {
      console.log('Available');
    } else {
      console.log('Unavailable');
    }
    console.log("Current Id", this.props.currentId) //Current Delivery Key
  }

  checkingDevice = async() => {
    isAvailable = await SMS.isAvailableAsync();
    return isAvailable
  }

  sendText = async(text) => {
    const { result }= await SMS.sendSMSAsync(this.props.phone, text);
  }

  sendAndComplete = async(text) => {
    const { result }= await SMS.sendSMSAsync(this.props.phone, text);
    this.props.currentDelivery('') //currentId becomes empty string, delivery object key gone
  }

  render() {
  
    return ( 
        <View style={styles.container}>
            <View style = {styles.whiteBox}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <Image source ={require('./../assets/images/black_x.png')} style={styles.x} />
                </TouchableOpacity>
                <Text style={styles.header}>Select Your Status</Text>
                <TouchableOpacity onPress={this.sendText.bind(this, 'Your delivered is going to Hinman!')}>
                    <View style = {styles.rectangles}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.rectangleText}>Going to Hinman</Text>
                        </View>
                    </View>
                    <View style = {styles.blueRectangles}>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.sendText.bind(this, 'Your deliverer is in line at Hinman!')}>
                    <View style = {styles.rectangles}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.rectangleText}>In Line</Text>
                        </View>
                    </View>
                    <View style = {styles.blueRectangles}>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.sendText.bind(this, 'Your deliverer has picked up your mail and is on the way!')}>
                    <View style = {styles.rectangles}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.rectangleText}>Picked Up and En Route</Text>
                        </View>
                    </View>
                    <View style = {styles.blueRectangles}>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.sendAndComplete.bind(this, 'Your deliverer has delivered your mail!')}>
                    <View style = {styles.rectangles}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.rectangleText}>Delivered</Text>
                        </View>
                    </View>
                    <View style = {styles.blueRectangles}>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(92, 92, 92, 0.50)',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get("screen").height*1.5,
    width:Dimensions.get("screen").width,
    top: -Dimensions.get("screen").height*.5,
    position: 'absolute',
  },
  whiteBox: {
    backgroundColor: '#fff',
    width:Dimensions.get("screen").width*.9,
    height: Dimensions.get("screen").height*.6,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderColor: '#19C6D1',
    borderWidth: 1.5,
    borderRadius: 5,
    top: Dimensions.get("screen").height*.5,
  },
  rectangles: {
    backgroundColor: '#ffffff',
    marginTop: Dimensions.get("screen").height*.01,
    marginBottom: Dimensions.get("screen").height*.02,
    width: Dimensions.get("screen").width*.7,
    height: Dimensions.get("screen").height*.08,
    shadowOffset: { width: 8, height: 4},
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#19C6D1',
    borderWidth: 1.5,
    borderRadius: 5,
  },
  rectangleText:{
    fontSize: 24,
    color:  '#212121',
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
  },
  header: {
    fontSize: 30,
    color:  '#212121',
    textAlign: 'center',
    width: Dimensions.get("screen").width,
    fontFamily: 'Montserrat-Bold',
    marginBottom: '2%',
    marginTop: '2%',
  },
  x:{
    width: Dimensions.get("screen").width*.06,
    height: Dimensions.get("screen").width*.06,
    marginRight: Dimensions.get("screen").width*.73,
    marginTop: -Dimensions.get("screen").height*.015,
  },
  blueRectangles: {
    backgroundColor: '#19C6D1',
    marginTop: -Dimensions.get("screen").height*.02,
    marginBottom: Dimensions.get("screen").height*.01,
    width: Dimensions.get("screen").width*.7,
    height: Dimensions.get("screen").height*.01,
  },
});

const mapStateToProps = state => {
  return {
    currentId: state.id
  }
}

const mapDispatchToProps = {
  currentDelivery
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusUpdateModal);
