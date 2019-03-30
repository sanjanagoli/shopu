import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity, PixelRatio} from 'react-native';
import OrangeBackground from './../components/OrangeBackground';

let notifs = [{key: 'Bob is going to the store!', time: '10:23 pm', order: 'Order #1'}, {key: 'Bobby is en route!', time: '9:00 pm', order: 'Order #5'}, 
{key: 'Robert has delivered!', time: '8:19 pm', order: 'Order #3'}, {key: 'Robert is en route!', time: '6:00 pm', order: 'Order #3'}, {key: 'Bobby is going to the store!', time: '1:23 pm', order: 'Order #5'}, {key: 'Robert has checked out!', time: '12:00 pm', order: 'Order #3'}, 
{key: 'Billy has delivered!', time: '8:19 am', order: 'Order #2'}, {key: 'Billy has checked out!', time: '6:45 am', order: 'Order #2'}]



export default class Notifications extends React.Component {


renderFontSize = () => {
  if (PixelRatio.get() === 2) {
    return 70
  }
  else if (PixelRatio.get() === 3){
    return 50
  }
}



  static navigationOptions = {
    header: null,
    };

  notificationTouch=() => {
  }

  render() {
    return (
      <View style={styles.container}>
        <OrangeBackground/>
<<<<<<< HEAD
<<<<<<< HEAD
        <Toolbar/>
        <Text style={{color: '#ffffff',marginTop: Dimensions.get("screen").height*.04,marginBottom: 20,textAlign: 'center',fontFamily: 'Montserrat-SemiBold', fontSize: this.renderFontSize()}}>Notifications!</Text>
        <View style={styles.whiteBox}/>
          <FlatList style={{marginTop: -Dimensions.get("screen").height*.44}} vertical={true}
=======
        <Text style={styles.header}>Notifications!</Text>
        <View style={[styles.whiteBox, {paddingTop: Dimensions.get("screen").height*.08, paddingBottom: Dimensions.get("screen").height*.01}]}>
          <FlatList vertical={true}
>>>>>>> 07a10ac60d73a340476d1b70902423680e6ee605
=======
        <Toolbar/>
        <Text style={{color: '#ffffff',marginTop: Dimensions.get("screen").height*.04,marginBottom: 20,textAlign: 'center',fontFamily: 'Montserrat-SemiBold', fontSize: this.renderFontSize()}}>Notifications!</Text>
        <View style={[styles.whiteBox, {paddingTop: Dimensions.get("screen").height*.08, paddingBottom: Dimensions.get("screen").height*.01}]}>
          <FlatList style={true}
>>>>>>> 6fe2a8f20a87d0b9733b8265d0e90a321debce2b
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
        </View>
        <View style={styles.blueBox} />
        <View style={styles.purpleBox}/>
        <Text style={styles.recentOrdersText}>Your recent orders...</Text>
        <View style={{marginTop: Dimensions.get("screen").height*.1}} />
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
    header: {
      color: '#ffffff',
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 58,
      textAlign: 'center',
      marginBottom: Dimensions.get("screen").height*.02,
      marginTop: Dimensions.get("screen").height*.08,
    },
>>>>>>> 07a10ac60d73a340476d1b70902423680e6ee605
=======
>>>>>>> 6fe2a8f20a87d0b9733b8265d0e90a321debce2b
    recentOrdersText: {
      fontSize: 25,
      color: '#FFF',
      textAlign: 'center',
      fontFamily: 'Montserrat-Medium',
      marginTop: Dimensions.get("screen").height*.22,
      position: 'absolute',
    },
    whiteBox: {
      flexDirection: 'column',
      width: Dimensions.get("screen").width*.91,
      height: Dimensions.get("screen").height*.53,
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
      marginTop: Dimensions.get("screen").height*.05,
    },
    notificationHeader: {
      fontSize: 25,
      color: '#484848',
      textAlign: 'left',
      fontFamily: 'Montserrat-Regular',
      marginBottom: Dimensions.get("screen").height*.02,
    },
    notificationInfo: {
      fontSize: 20,
      color: '#9B9A9A',
      textAlign: 'left',
      fontFamily: 'Montserrat-Regular',
      marginBottom: Dimensions.get("screen").height*.02,
    },
    notificationRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: Dimensions.get("screen").width*0.85,
    },
    blueBox: {
      backgroundColor: '#6DC4E0',
      width: Dimensions.get("screen").width - 100,
      height: Dimensions.get('screen').height*0.085,
      transform:([{ rotateZ:'-5deg'}]),
      position: 'absolute',
      marginTop: Dimensions.get("screen").height*.2,
    },
    purpleBox: {
      backgroundColor: '#605DF1',
      width: Dimensions.get("screen").width*0.77,
      height: Dimensions.get('screen').height*.075,
      position: 'absolute',
      marginTop: Dimensions.get("screen").height*.2,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 2,
      shadowOpacity: 0.9,
    },
 
});
