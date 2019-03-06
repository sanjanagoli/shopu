import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import OrangeBackground from './../components/OrangeBackground';
import PrimaryButton from './../components/PrimaryButton';
import Toolbar from '../components/Toolbar';

export default class Checkout extends React.Component {
  static navigationOptions = {
    header: null,
    };
  
  buyNow = () => {
    this.props.navigation.navigate('OrderComplete')
  }
  
  render() {
    return (
    <View style={styles.whiteBackground}> 
        <OrangeBackground/>
        <Toolbar navigation={this.props.navigation}/>
            <View style={styles.searchTextBox}>
                <Image source ={require('./../assets/images/left-arrow.png')} style={styles.leftArrow}/>  
                <Text style={styles.searchText}>Search Again</Text>
            </View>
            <View style={styles.checkoutContentBox}>
                <Text style={styles.header}>Checkout</Text>
                <View style= {styles.cvsTotal}>
                    <View styles={{marginRight: 50}}>
                        <Text style={styles.totalHeader}>Your CVS Total:</Text>
                        <Text style={styles.totalsText}>Subtotal:</Text>
                        <Text style={styles.totalsText}>Delivery Charge:</Text>
                        <Text style={styles.totalsText}>Total:</Text>
                        <Text style={styles.totalsText}>ETA:</Text>
                        <Text style={styles.totalsText}>Drop-Off Location:</Text>
                    </View>
                </View>
                <View style={styles.walTotal}>
                    <View styles={{marginLeft: 10}}>
                        <Text style={styles.totalHeader}>Your Walmart Total:</Text>
                        <Text style={styles.totalsText}>Subtotal:</Text>
                        <Text style={styles.totalsText}>Delivery Charge:</Text>
                        <Text style={styles.totalsText}>Total:</Text>
                        <Text style={styles.totalsText}>ETA:</Text>
                        <Text style={styles.totalsText}>Drop-Off Location:</Text>
                    </View>
                </View>
                <View styles={styles.button}>
                  <PrimaryButton onPress={this.buyNow} title={'Buy Now!'} backgroundColor={'#FF715B'} height={Dimensions.get("screen").height*.07} fontSize={30}/>
                </View>
            </View>
    </View>
    )
    }
};

const styles = StyleSheet.create({
    whiteBackground: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    iconsBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: Dimensions.get('screen').width,
      marginTop: Dimensions.get('screen').height*0.05,
    },
    shopCart: {
      width: 40,
      height: 40,
      marginLeft: Dimensions.get('screen').width*0.05,
    },
    personIcon: {
      width: 40,
      height: 40,  
      marginRight: Dimensions.get('screen').width*0.05,
    },
    checkoutContentBox: {
      flexDirection: 'column',
      alignItems: 'center',
      width: Dimensions.get('screen').width,
      marginTop: Dimensions.get('screen').height*0.02,  
    },
    header: {
      color: '#ffffff',
      fontFamily: 'Montserrat-Medium',
      fontSize: 60,
      textAlign: 'center',
      marginBottom: Dimensions.get('screen').height*0.03,
    },
    searchTextBox: {
      flexDirection: 'row',
      width: Dimensions.get('screen').width,
      marginTop: Dimensions.get('screen').height*0.02,
    },
    searchText: {
      color: '#ffffff',
      fontFamily: 'Montserrat-Medium',
      fontSize: 20,
      textAlign: 'left',
      marginLeft: Dimensions.get('screen').width*0.02,
    },
    leftArrow: {
      width: 20,
      height: 22,
      marginLeft: Dimensions.get('screen').width*0.05,
      marginTop: Dimensions.get('screen').height*0.0068,
    },
    cvsTotal: {
      width: Dimensions.get("screen").width * .90,
      height: Dimensions.get("screen").height* .25,
      backgroundColor: '#6DC4E0',    
      justifyContent: 'center',
      flexDirection: 'column',
      marginTop: Dimensions.get('screen').height*0.015,
      marginBottom: Dimensions.get('screen').height*0.015,
    },
    walTotal: {
      width: Dimensions.get("screen").width * .90,
      height: Dimensions.get("screen").height * .25,
      backgroundColor: '#605DF1',    
      justifyContent: 'center',
      flexDirection: 'column',
      marginBottom: -Dimensions.get('screen').height*0.055,
    },
    totalHeader: {
      color: '#ffffff',
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 25,
      marginLeft: Dimensions.get('screen').width*0.05,
    },
    totalsText: {
      color: '#ffffff',
      fontFamily: 'Montserrat-Medium',
      fontSize: 19,
      marginLeft: Dimensions.get('screen').width*0.05,
    },
    button: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3
    },
     shadowRadius: 5,
     shadowOpacity: 1.0,
    }
});
