import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import variables from './../assets/data/variables';
import OrangeBackground from './../components/OrangeBackground';
import PrimaryButton from '../components/PrimaryButton';
import Toolbar from '../components/Toolbar';

export default class AuthorizeDriver extends React.Component {
    static navigationOptions = {
        header: null,
    };
    
    submit = () => {
        this.props.navigation.navigate('OrderComplete')
    }

    copyEmail = () => {
    }

    render() {
        return (
            <View style={styles.container}>
                <OrangeBackground/>
                <Toolbar navigation={this.props.navigation}/>
                <Text style={styles.header}>Complete Actions to Authorize Driver</Text>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={this.copyEmail} title={'Copy Auth Email'} backgroundColor={'#6DC4E0'} height={Dimensions.get("screen").height*.06} fontSize={25}/>
                    <PrimaryButton onPress={this.submit} title={'Confirm Email Sent'} backgroundColor={'#6DC4E0'} height={Dimensions.get("screen").height*.06} fontSize={25}/>
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
        color: '#ffffff',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 40,
        textAlign: 'center',
        marginTop: Dimensions.get('screen').height*0.08,
        marginBottom: Dimensions.get('screen').height*0.05,
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
