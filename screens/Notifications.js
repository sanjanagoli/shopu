import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity} from 'react-native';


let notifs = [{key: 'Bob is going to the store!', time: '10:23 pm', order: 'Order #1'}, {key: 'Bobby is en route!', time: '9:00 pm', order: 'Order #5'}, 
{key: 'Robert has delivered!', time: '8:19 pm', order: 'Order #3'}, {key: 'Robert is en route!', time: '6:00 pm', order: 'Order #3'}, {key: 'Bobby is going to the store!', time: '1:23 pm', order: 'Order #5'}, {key: 'Robert has checked out!', time: '12:00 pm', order: 'Order #3'}, 
{key: 'Billy has delivered!', time: '8:19 am', order: 'Order #2'}, {key: 'Billy has checked out!', time: '6:45 am', order: 'Order #2'}]

export default class Notifications extends React.Component {

  notificationTouch=() => {
  }



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
            data={notifs}
            renderItem={(
              {item}) => {
                return(
                  <TouchableOpacity onPress={this.notificationTouch}>
                   <View>
                     <Text style={styles.notificationHeader}>{item.key}</Text>
                     <View style={styles.notificationRow}>
                       <Text style={styles.notificationInfo}>{item.order}</Text>
                       <Text style={styles.notificationInfo}>{item.time}</Text>
                     </View>
                   </View>
                  </TouchableOpacity>
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
<<<<<<< HEAD
      justifyContent: 'center',
=======
>>>>>>> c38b6c2973d885100e51c262ef13b9729e7b6826
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
    notificationHeader: {
      fontSize: 25,
      color: '#484848',
      textAlign: 'left',
      fontFamily: 'Montserrat-Regular',
      marginBottom: 10,
    },
    notificationInfo: {
      fontSize: 20,
      color: '#9B9A9A',
      textAlign: 'left',
      fontFamily: 'Montserrat-Regular',
      marginBottom: 20,
    },
    notificationRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: Dimensions.get("screen").width*0.85,
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
