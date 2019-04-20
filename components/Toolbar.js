import React from 'react';
import { StyleSheet, View, Dimensions, Image, TouchableOpacity, Text} from 'react-native';

export default class Toolbar extends React.Component {
    static navigationOptions = {
        header: null,
        };
        
    bag = () => {
        this.props.navigation.navigate('ShoppingList')
        
    } 
    person = () => {
        this.props.navigation.navigate('AccountProfile')
    }

    render() {
      return (
           <View style={[styles.formatInBox, {marginBottom: this.props.marginBottom}]}>
            <View style={{textAlign: 'center'}}>
                <Text style={styles.titleText}>Hiey girl</Text>
            </View>
            {this.props.pageType == 'Driver' ?
            <TouchableOpacity onPress={this.bag}>
                <Image source ={require('./../assets/images/shopping-bag.png')} style={styles.bag}/> 
            </TouchableOpacity> 
            : null}
            <TouchableOpacity onPress={this.person}>
                <Image source ={require('./../assets/images/personicon.png')} style={styles.person}/> 
            </TouchableOpacity>
           </View>
      );
    }
}

const styles = StyleSheet.create({
    formatInBox: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: Dimensions.get('screen').width,
        alignItems: 'center',
        height: Dimensions.get('screen').height*.06,
        backgroundColor: '#B3F0F4',
        marginTop: Dimensions.get('screen').height*.04,
        textAlign: 'center'
    },
    person:{
        width: 43,
        height: 40,
        marginLeft: Dimensions.get('screen').width*.85,
        marginRight: Dimensions.get('screen').width*.5,

    },
    bag:{
        width: 36,
        height: 40,
        marginLeft: Dimensions.get('screen').width*.04,
        marginRight: Dimensions.get('screen').width*-.5,
    },
    titleText:{
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 30,
        color: '#262626',
        marginLeft: Dimensions.get('screen').width*.45,
        marginRight: Dimensions.get('screen').width*-45,
    }
  });
