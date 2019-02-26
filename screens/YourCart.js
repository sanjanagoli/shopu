import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, FlatList} from 'react-native';
import PrimaryButton from './../components/PrimaryButton';

export default class YourCart extends React.Component {
  static navigationOptions = {
    header: null,
    };
    
  checkoutNow = () => {
    this.props.navigation.navigate('Checkout')
  }

  render() {
    return (
    <View style={styles.whiteBackground}> 
        <View style={styles.orangeCard}>
            <View style={styles.iconsBox}>
                <Image source ={require('./../assets/images/shopping_bag.png')} style={styles.shopCart}/>
                <Image source ={require('./../assets/images/person.png')} style={styles.personIcon}/>
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
        <View style={{marginTop: -Dimensions.get("screen").height*.065}}>
          <PrimaryButton onPress={this.checkoutNow} backgroundColor={'#FF715B'}  height={50} title={'Check Out Now!'} fontSize={20}/> 
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
      marginBottom: Dimensions.get('screen').height * .4,
    },
    iconsBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: Dimensions.get('screen').width,
      marginTop: Dimensions.get('screen').height * .4,
    },
    shopCart: {
      width: 35,
      height: 40,
      marginLeft: Dimensions.get("screen").width*.04,
      marginTop: Dimensions.get("screen").height*.04,
    },
    personIcon: {
      width: 42,
      height: 40,  
      marginRight: Dimensions.get("screen").width*.04,
      marginTop: Dimensions.get("screen").height*.04,
    },
    checkoutContentBox: {
      flexDirection: 'column',
      alignItems: 'center',
      width: Dimensions.get('screen').width,
      marginTop: Dimensions.get("screen").height*.15,  
    },
    header: {
      color: '#ffffff',
      fontFamily: 'Montserrat-Medium',
      fontSize: 60,
      textAlign: 'center',
      marginBottom: Dimensions.get("screen").height*.03,
      marginTop: -Dimensions.get("screen").height*.15,
    },
    searchTextBox: {
      flexDirection: 'row',
      width: Dimensions.get('screen').width,
      marginTop: Dimensions.get("screen").height*.015,
      marginLeft: Dimensions.get('screen').width*0.06,
    },
    searchText: {
      color: '#ffffff',
      fontFamily: 'Montserrat-Medium',
      fontSize: 20,
      textAlign: 'left',
      marginLeft: Dimensions.get('screen').width*0.01,
    },
    leftArrow: {
      width: 20,
      height: 22,
      marginLeft: Dimensions.get('screen').width*0.015,
      marginTop: Dimensions.get('screen').height*0.005,
    },
    cvsTotal: {
      width: Dimensions.get("screen").width * .90,
      height: Dimensions.get("screen").height* .25,
      backgroundColor: '#6DC4E0',    
      justifyContent: 'center',
      flexDirection: 'column',
      marginTop: Dimensions.get("screen").height * .01,
      marginBottom: Dimensions.get("screen").height*.015,
      paddingTop: Dimensions.get('screen').height*0.06,
      paddingBottom: Dimensions.get('screen').height*0.065,
    },
    walTotal: {
      width: Dimensions.get("screen").width * .90,
      height: Dimensions.get("screen").height * .25,
      backgroundColor: '#605DF1',    
      justifyContent: 'center',
      flexDirection: 'column',
      
      paddingTop: Dimensions.get('screen').height*0.06,
      paddingBottom: Dimensions.get('screen').height*0.065,
    },
    totalHeader: {
      color: '#ffffff',
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 25,
      marginLeft: Dimensions.get('screen').width*0.05,
      marginBottom: Dimensions.get('screen').height*0.0075,
    },
    totalsText: {
      color: '#ffffff',
      fontFamily: 'Montserrat-Medium',
      fontSize: 19,
      marginLeft: Dimensions.get('screen').width*0.05,
      marginTop: Dimensions.get('screen').height*0.0075,
    },
    editPencil: {
        width: 27,
        height: 27,
        marginLeft: Dimensions.get('screen').width*0.4,
    }
});

