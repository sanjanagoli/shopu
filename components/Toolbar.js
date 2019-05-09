import React from 'react';
import { StyleSheet, View, Dimensions, Image, TouchableOpacity, Text} from 'react-native';

export default class Toolbar extends React.Component {
    static navigationOptions = {
        header: null,
        };
        
    bag = () => {
        this.props.navigation.navigate('Deliveries')
        
    } 
    person = () => {
        this.props.navigation.navigate('AccountProfile')
    }

    render() {
      return (
           <View style={[styles.formatInBox, {marginBottom: this.props.marginBottom}]}>
            {this.props.pageType == 'Driver' ?
            <View>
                <TouchableOpacity onPress={this.bag}>
                    <Image source ={require('./../assets/images/shopping-bag.png')} style={styles.bag}/> 
                </TouchableOpacity>
            </View> 
            : null}
            <Text style={styles.titleText}>{this.props.title}</Text>
            {this.props.pageType == 'Profile' ?
            null:
            <TouchableOpacity style={{marginLeft: Dimensions.get('screen').width*.8}} onPress={this.person}>
                <Image source ={require('./../assets/images/personicon.png')} style={styles.person}/> 
            </TouchableOpacity>}
           </View>
      );
    }
}

const styles = StyleSheet.create({
    formatInBox: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        width: Dimensions.get('screen').width,
        alignItems: 'center',
        height: Dimensions.get('screen').height*.12,
        backgroundColor: '#B3F0F4',
        textAlign: 'center'
    },
    person:{
        marginTop: Dimensions.get('screen').height*.04,
        width: 43,
        height: 40,
    },
    bag:{
        marginTop: Dimensions.get('screen').height*.04,
        width: 36,
        height: 40,
        marginRight: Dimensions.get('screen').width*-.1,
    },
    titleText:{
        top: Dimensions.get('screen').height*.065,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 30,
        color: '#262626',
        position: 'absolute',
    }
  });
