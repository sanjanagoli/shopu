import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native';


export default class Notifications extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.peachBox}/>
        <Text style={styles.header}>Notifications!</Text>
        <View style={styles.iconsBox}> 
          <Image source={require('./../assets/images/top_shopping_cart.png')}style={styles.shopCart} /> 
          <Image source={require('./../assets/images/profile_head.png')}style={styles.personIcon} />  
        </View>
        <View style={styles.whiteBox}/>
          <FlatList style={{marginTop: -Dimensions.get("screen").height*.45}} vertical={true}
            data={[{key: 'Notification # 1'}, {key: 'Notification #2' }, 
            {key: 'Notification #3'}, {key: 'Notification #4'}, {key: 'Notification #5'}, {key: 'Notification #6'}, {key: 'Notification #7'}, {key: 'Notification #8'}, {key: 'Notification #9'}, {key: 'Notification #10'}]}
            renderItem={(
              {item}) => {
                return(
              <View>
                <Text style={styles.notificationList}>{item.key}</Text>
              </View>
               )
              }
            }
          />
        <View style={styles.blueBox} />
        <View style={styles.purpleBox}/>
        <Text style={styles.recentOrdersText}>Your recent orders...</Text>
        <View style={{marginTop: Dimensions.get("screen").height*.084}} />
      </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
    },
    header: {
      color: '#ffffff',
      fontFamily: 'Montserrat-Medium',
      fontSize: 58,
      textAlign: 'center',
      marginBottom: 20,
      marginTop: -220,
    },
    recentOrdersText: {
      fontSize: 25,
      color: '#ffffff',
      textAlign: 'center',
      fontFamily: 'Montserrat-Medium',
      marginTop: Dimensions.get("screen").height*.28,
      position: 'absolute',
    },
    whiteBox: {
      flexDirection: 'column',
      width: Dimensions.get("screen").width*.91,
      height: Dimensions.get("screen").height*.5,
      shadowColor: '#000000',
      shadowOffset: {
          width: 0,
          height: 3
      },
      shadowRadius: 5,
      shadowOpacity: 1.0,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: Dimensions.get("screen").height*.18,
    },
    notificationList: {
      fontSize: 25,
      color: '#000',
      textAlign: 'left',
      fontFamily: 'Montserrat-Regular',
      marginRight: 120,
      marginBottom: 20,
    },
    peachBox: {
      width: Dimensions.get("screen").width,
      height: Dimensions.get("screen").height*.40,
      backgroundColor: '#FF715B',
    },
    blueBox: {
      backgroundColor: '#6DC4E0',
      width: Dimensions.get("screen").width - 100,
      height: 80,
      transform:([{ rotateZ:'-5deg'}]),
      position: 'absolute',
      marginTop: Dimensions.get("screen").height*.26,
    },
    purpleBox: {
      backgroundColor: '#605DF1',
      width: Dimensions.get("screen").width - 100,
      height: 70,
      position: 'absolute',
      marginTop: Dimensions.get("screen").height*.26,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 2,
      shadowOpacity: 0.9,
    },
    iconsBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: -Dimensions.get('screen').height*0.1,
      width: Dimensions.get('screen').width,
    },
    shopCart: {  //implement toolbar
      width: 40,
      height: 40,
      marginTop: -Dimensions.get('screen').height*0.1,
      justifyContent: 'flex-start',
      marginLeft: 15,
    },
    personIcon: { //implement toolbar
      width: 40,
      height: 40,
      marginRight: 15,
      marginTop: -Dimensions.get('screen').height*0.1,
    },
    
});
