import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, FlatList} from 'react-native';
import PrimaryButton from './../components/PrimaryButton';

export default class YourCart extends React.Component {
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
                <Text style={styles.header}>Your Cart!</Text>
                <View style= {styles.cvsTotal}>
                    <View styles={{marginRight: 50}}>
                        <Text style={styles.totalHeader}>Your CVS Cart:</Text>
                        <FlatList
                      data={[1]}
                      keyExtractor={(item) => item.toString()}
                      renderItem={
                        ({item}) => {
                        return (
                            <View>
                            <Text style={styles.totalsText}>1. Apple - $1.99 per pound</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.totalsText}>Comments</Text>
                                <Image style={styles.editPencil}
                                    source={require('./../assets/images/edit_pencil.png')} />
                            </View>
                            <Text style={styles.totalsText}>2. Pencil - $3.00 per pack</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.totalsText}>Comments</Text>
                                <Image style={styles.editPencil}
                                    source={require('./../assets/images/edit_pencil.png')} />
                            </View>
                            </View>
                      )
                      }
                    }
                    />
                    </View>
                </View>
                <View style={styles.walTotal}>
                    <View styles={{marginLeft: 10}}>
                        <Text style={styles.totalHeader}>Your Walmart Cart:</Text>
                        <FlatList
                      data={[1]}
                      keyExtractor={(item) => item.toString()}
                      renderItem={
                        ({item}) => {
                        return (
                            <View>
                            <Text style={styles.totalsText}>1. Apple - $1.99 per pound</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.totalsText}>Comments</Text>
                                <Image style={styles.editPencil}
                                    source={require('./../assets/images/edit_pencil.png')} />
                            </View>
                            <Text style={styles.totalsText}>2. Pencil - $3.00 per pack</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.totalsText}>Comments</Text>
                                <Image style={styles.editPencil}
                                    source={require('./../assets/images/edit_pencil.png')} />
                            </View>
                            </View>
                      )
                      }
                    }
                    />
                    </View>
                </View>  
            </View>
            
                
           
            
        </View>
        <View styles={styles.checkoutButton}>
            <PrimaryButton backgroundColor={'#FF715B'}  height={50} title={'Check Out Now!'} fontSize={20} width={250}/> 
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
      alignItems: 'center',
      width: Dimensions.get("screen").width,
      height: Dimensions.get('screen').height * 7 / 16,
      marginBottom: 290,
    },
    iconsBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: Dimensions.get('screen').width,
      marginTop: 350,
    },
    shopCart: {
      width: 40,
      height: 40,
      marginLeft: 15,
      marginTop: 15
    },
    personIcon: {
      width: 45,
      height: 42,  
      marginRight: 15,
      marginTop: 13
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
      marginTop: 10,
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
    },
    walTotal: {
      width: Dimensions.get("screen").width * .90,
      height: Dimensions.get("screen").height * .25,
      backgroundColor: '#605DF1',    
      justifyContent: 'center',
      flexDirection: 'column',
      marginTop: 2,
    },
    totalHeader: {
      color: '#ffffff',
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 25,
      marginLeft: Dimensions.get('screen').width*0.05,
      marginBottom: 5
    },
    totalsText: {
      color: '#ffffff',
      fontFamily: 'Montserrat-Medium',
      fontSize: 19,
      marginLeft: Dimensions.get('screen').width*0.05,
      marginTop: 5
    },
    checkoutButton: {
        shadowOffset: {width: 0, height: 15},
        shadowColor: '#000000', 
        shadowOpacity: 0.25, 
        shadowRadius: 50,
    },
    editPencil: {
        width: 27,
        height: 27,
        marginLeft: 160
    }
});

