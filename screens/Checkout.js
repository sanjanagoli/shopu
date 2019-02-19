import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

export default class Checkout extends React.Component {
  render() {
    return (
    <View style={styles.whiteBackground}> 
        <View style={styles.orangeCard}>
            <View style={styles.iconsBox}>
                <Image source ={require('./../assets/images/scart.png')} style={styles.shopCart}/>
                <Image source ={require('./../assets/images/personicon.png')} style={styles.personIcon}/>
            </View>
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
    orangeCard: {
      backgroundColor: '#FF715B',
      justifyContent: 'center',
      width: Dimensions.get("screen").width,
      height: Dimensions.get('screen').height * 7 / 16,
    },
    iconsBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: Dimensions.get('screen').width,
      marginTop: Dimensions.get('screen').height*0.4,
    },
    shopCart: {
      width: 40,
      height: 40,
      marginLeft: 15,
    },
    personIcon: {
      width: 40,
      height: 40,  
      marginRight: 15,
    },
    checkoutContentBox: {
      flexDirection: 'column',
      alignItems: 'center',
      width: Dimensions.get('screen').width,
      marginTop: 40,  
    },
    header: {
      color: '#ffffff',
      fontFamily: 'Montserrat-Medium',
      fontSize: 60,
      textAlign: 'center',
      marginBottom: 20,
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
    },
    leftArrow: {
      width: 20,
      height: 22,
      marginLeft: 15,
      marginTop: Dimensions.get('screen').height*0.005,
    },
    cvsTotal: {
      width: Dimensions.get("screen").width * .90,
      height: Dimensions.get("screen").height* .25,
      backgroundColor: '#6DC4E0',    
      justifyContent: 'center',
      flexDirection: 'column',
      marginTop: 10,
      marginBottom: 10,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3
    },
     shadowRadius: 5,
     shadowOpacity: 1.0,
    },
    walTotal: {
      width: Dimensions.get("screen").width * .90,
      height: Dimensions.get("screen").height * .25,
      backgroundColor: '#605DF1',    
      justifyContent: 'center',
      flexDirection: 'column',
      marginTop: 10,
      marginBottom: 10,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3
    },
     shadowRadius: 5,
     shadowOpacity: 1.0,
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
    }
});

