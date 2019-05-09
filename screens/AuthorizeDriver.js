import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Clipboard } from 'react-native';
import variables from './../assets/data/variables';
import PrimaryButton from '../components/PrimaryButton';
import Toolbar from '../components/Toolbar';
import firebase from 'firebase';




const database = firebase.database();
    this.state= {driverName: null, yourFirstName: null, yourLastName: null}
  

export default class AuthorizeDriver extends React.Component {
    
    static navigationOptions = {
        header: null,
    };
    
    submit = () => {
        this.props.navigation.navigate('OrderComplete')
    }

    copyEmail = () => {
        const props = this.props;
        database.ref(`${/deliveries/}` + 'delivery' +this.props.navigation.getParam('deliveryKey')).once('value').then(function(snapshot) {   
            driverName = snapshot.val().driver;
            database.ref(`${/users/}` + props.navigation.state.params['userKey']).once('value').then(function(snapshot) {
                yourFirstName = snapshot.val().firstName;
                yourLastName = snapshot.val().lastName;
            Clipboard.setString(`Dear Hinman Staff, \n \n${driverName} will be picking up my packages for me. \n \nThank You, \n${yourFirstName} ${yourLastName}`);
            })
          });
    
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Toolbar title = {'Authorizing'} navigation={this.props.navigation}/>
                <View style={styles.buttonContainer}>
                <TouchableOpacity onPress ={this.copyEmail}>
                    <View style = {styles.rectangles}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.rectangleText}>Copy Authentification Email</Text>
                        </View>
                    </View>
                    <View style = {styles.blueRectangles}>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {this.submit}>
                    <View style = {styles.rectangles}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.rectangleText}>Confirm Email Sent</Text>
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
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    mainView: {
        justifyContent: 'center',
        alignItems: 'center',        
    },
    buttonContainer: {
        marginTop: Dimensions.get('screen').height*.18,
        height: Dimensions.get('screen').height*.6,
        alignItems: 'center',
    },  
    rectangles: {
        backgroundColor: '#ffffff',
        marginTop: Dimensions.get("screen").height*.02,
        marginBottom: Dimensions.get("screen").height*.1,
        width: Dimensions.get("screen").width*.8,
        height: Dimensions.get("screen").height*.12,
        shadowOffset: { width: 8, height: 4},
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#19C6D1',
        borderWidth: 1.5,
        borderRadius: 5,
        borderBottomWidth: 15,
      },
      rectangleText:{
        fontSize: 25,
        color:  '#212121',
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
      },
});
