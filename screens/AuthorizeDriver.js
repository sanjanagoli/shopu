import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Toolbar from '../components/Toolbar';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { currentDelivery } from '../reducers/completedReducer';

const database = firebase.database();
    this.state= {driverName: null, yourFirstName: null, yourLastName: null}
  

class AuthorizeDriver extends React.Component {
    
    static navigationOptions = {
        header: null,
    };
    
    submit = () => {
        database.ref(`deliveries/delivery${this.props.currentId}/confirmedEmail`).set(true)
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
                <Toolbar title={'Authorize Driver'} navigation={this.props.navigation}/>
                
                <View style={styles.buttonContainer}>
                <TouchableOpacity onPress ={this.copyEmail}>
                    <View style = {styles.rectangles}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.rectangleText}>Copy Authentification Email</Text>
                        </View>
                    </View>
                    <Text style={styles.Subheader}>Copy authentification email and send it to Hinman.</Text>
                    <View style = {styles.blueRectangles}>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {this.submit}>
                    <View style = {styles.rectangles}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.rectangleText}>Confirm Email Sent</Text>
                        </View>
                    </View>
                    <Text style={styles.Subheader}>Press the confirm email button to notify your deliverer.</Text>
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
    header: {
        color: '#000',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 40,
        textAlign: 'center',
        marginTop: Dimensions.get('screen').height*0.05,
        marginBottom: Dimensions.get('screen').height*0.05,
        paddingHorizontal: Dimensions.get('screen').width*0.05 
    },
    mainView: {
        justifyContent: 'center',
        alignItems: 'center',        
    },
    buttonContainer: {
        height: Dimensions.get('screen').height*.6,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },  
    rectangles: {
        backgroundColor: '#ffffff',
        marginTop: Dimensions.get("screen").height*.1,
        marginBottom: Dimensions.get("screen").height*.02,
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
      Subheader:{
        fontSize: 18,
        color:  '#212121',
        fontFamily: 'Montserrat-Light',
        textAlign: 'center',
        width: Dimensions.get("screen").width*.8,
        marginBottom: Dimensions.get("screen").height*.01,
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

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizeDriver);
