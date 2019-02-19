import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

export default class Checkout extends React.Component {
  render() {
    return (
    <View style={styles.whiteBackground}> 
        <View style={styles.orangeCard} />
            <View style={styles.iconsBox}>
                <Image source ={require('./../assets/images/shopping-cart.png')} style={styles.shopCart}/>
                <Image source ={require('./../assets/images/personicon.png')} style={styles.personIcon}/>
            </View>
            <View style={styles.searchTextBox}>
                <Image source ={require('./../assets/images/left-arrow.png')} style={styles.leftArrow}/>  
                <Text style={styles.searchText}>Search Again</Text>
            <View style={styles.checkoutContent}>
                <Text style={styles.header}>Checkout</Text>
                <View style= {styles.cvsTotal}>
                    <Text style={styles.totalHeader}>Your CVS Total:</Text>
                    <Text style={styles.totalsText}>Subtotal:</Text>
                    <Text style={styles.totalsText}>Delivery Charge:</Text>
                    <Text style={styles.totalsText}>Total:</Text>
                    <Text style={styles.totalsText}>ETA:</Text>
                    <Text style={styles.totalsText}>Drop-Off Location:</Text>
                </View>
                <View style={styles.walTotal}>
                    <Text style={styles.totalHeader}>Your Walmart Total:</Text>
                    <Text style={styles.totalsText}>Subtotal:</Text>
                    <Text style={styles.totalsText}>Delivery Charge:</Text>
                    <Text style={styles.totalsText}>Total:</Text>
                    <Text style={styles.totalsText}>ETA:</Text>
                    <Text style={styles.totalsText}>Drop-Off Location:</Text>
                </View>  
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
      justifyContent: 'center',
    },
    orangeCard: {
      backgroundColor: '#FF715B',
      position: 'absolute',
      justifyContent: 'center',
      width: Dimensions.get("screen").width,
      height: Dimensions.get('screen').height * 7 / 16,
      top: 0,
    },
    iconsBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: Dimensions.get('screen').width,
    },
    shopCart: {
      width: 40,
      height: 40,
      marginLeft: 15,
      marginTop: Dimensions.get('screen').height*0.1,
    },
    personIcon: {
      width: 40,
      height: 40,  
      marginRight: 15,
      marginTop: Dimensions.get('screen').height,
    },
    checkoutInfo: {
      flexDirection: 'column',
      width: Dimensions.get('screen').width,
    },
    header: {
      color: '#ffffff',
      fontFamily: 'Montserrat-Medium',
      fontSize: 60,
      textAlign: 'center',
    },
    searchTextBox: {
      flexDirection: 'row',
      width: Dimensions.get('screen').width,
    },
    searchText: {
      color: '#ffffff',
      fontFamily: 'Montserrat-Medium',
      fontSize: 20,
      textAlign: 'left',
      marginLeft: 10,
      marginTop: Dimensions.get('screen').height*0.3,
    },
    leftArrow: {
      width: 40,
      height: 40,
      marginLeft: 15,
      marginTop: Dimensions.get('screen').height*0.3,
    },
    cvsTotal: {
      width: Dimensions.get("screen").width * .6,
      height: Dimensions.get("screen").height* .2,
      backgroundColor: '#6DC4E0',    
      alignItems: 'center',
      justifyContent: 'center',
    },
    walTotal: {
      width: Dimensions.get("screen").width * .6,
      height: Dimensions.get("screen").height * .2,
      backgroundColor: '#605DF1',    
      alignItems: 'center',
      justifyContent: 'center',
    },
    totalHeader: {
      color: '#ffffff',
      fontFamily: 'Montserrat-Medium',
      fontSize: 30,
      textAlign: 'left',
      marginLeft: 10,
      marginTop: Dimensions.get('screen').height*0.3,
    },
    totalsText: {
      color: '#ffffff',
      fontFamily: 'Montserrat-Medium',
      fontSize: 20,
      textAlign: 'left',
      marginLeft: 10,
      marginTop: Dimensions.get('screen').height*0.3,
    }
});

