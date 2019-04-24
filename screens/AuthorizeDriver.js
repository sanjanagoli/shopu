import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Clipboard } from 'react-native';
import variables from './../assets/data/variables';
import PrimaryButton from '../components/PrimaryButton';
import Toolbar from '../components/Toolbar';
import firebase from 'firebase';

const database = firebase.database();
    var driverName;
    var yourFirstName;
    var yourLastName;

export default class AuthorizeDriver extends React.Component {
    
    static navigationOptions = {
        header: null,
    };
    
    submit = () => {
        this.props.navigation.navigate('OrderComplete')
    }

    copyEmail = () => {
        database.ref('/deliveries/' + 'delivery-Lcgl7czbO36RksTa5yg').once('value').then(function(snapshot) {
                driverName = snapshot.val().driver;
            database.ref('/users/' + 'user-Ld7TgZ-zJLE7mGD8F9B').once('value').then(function(snapshot) {
                yourFirstName = snapshot.val().firstName;
                yourLastName = snapshot.val().lastName;

            Clipboard.setString(`Dear Hinman Staff, \n \n${driverName} will be picking up my packages for me. \n \nThank You, \n${yourFirstName} ${yourLastName}`);
            })
           
          });
    
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Toolbar navigation={this.props.navigation}/>
                <Text style={styles.header}>Authorizing</Text>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={this.copyEmail} title={'Copy Auth Email'} backgroundColor={'#fff'} height={Dimensions.get("screen").height*.06} fontSize={25} borderColor ={'#19C6D1'} borderWidth={1} borderBottomWidth= {15} height = {Dimensions.get('screen').height*.1} width = {Dimensions.get('screen').width*.8} />
                    <PrimaryButton onPress={this.submit} title={'Confirm Email Sent'} backgroundColor={'#fff'} height={Dimensions.get("screen").height*.06} fontSize={25} borderColor ={'#19C6D1'} borderWidth={1} borderBottomWidth= {15} height = {Dimensions.get('screen').height*.1} width = {Dimensions.get('screen').width*.8} />
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
    header: {
        color: '#262626',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 40,
        textAlign: 'center',
        marginTop: -40,
       
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
    
});
