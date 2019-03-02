import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, FlatList} from 'react-native';
import PrimaryButton from './../components/PrimaryButton';
import OrangeBackground from './../components/OrangeBackground';
import Toolbar from './../components/Toolbar'

const window = Dimensions.get("window")

let colors = ['#605DF1', '#6DC4E0']

let items = [
  {
    name: 'Apple',
    quantity: 3,
    comment: 'Granny Smith',
    check: require('./../assets/images/checkbox.png'),
  },
  {
    name: 'Apple',
    quantity: 3,
    comment: 'Granny Smith',
    check: require('./../assets/images/checkbox.png'),
  },
  {
    name: 'Apple',
    quantity: 3,
    comment: 'Granny Smith',
    check: require('./../assets/images/checkbox.png'),
  }
]

export default class RequestStatus extends React.Component { 
  static navigationOptions = {
    header: null,
    };
    
  
  render() {
    return (
        <View style={styles.container}>
            <OrangeBackground/>
            <Toolbar pageType={'Driver'} marginBottom={-Dimensions.get('screen').height*.02}/>
            
            <View style={styles.subView}>
              <Image style={styles.arrowIcon}
                  source={require('./../assets/images/back_arrow.png')} />
              <Text style={styles.browseText}>Browse Other Options</Text>
            </View>
            <View style={styles.mainView}>
              <View style={styles.whiteCard}>
                  <View style={styles.nameBox}>
                    <Text style={styles.nameText}>Bob - CVS</Text>
                  </View>
                  <View style={[styles.tableRows, {marginTop: Dimensions.get('screen').height*0.06, backgroundColor: '#6DC4E0'}]}>
                    <Text style={styles.itemInfo}>Item</Text>
                    <Text style={styles.itemInfo}>Q</Text>
                    <Text style={styles.itemInfo}>Comments</Text>
                    <Image style={styles.checkIcon}
                        source={require('./../assets/images/check.png')} />
                  </View>
                  <View style={styles.table}>
                      <FlatList
                      data={items}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={
                        ({item, index}) => {
                        return (
                            <View style={[styles.tableRows, {backgroundColor: colors[index % colors.length]}]}>
                                <Text style={styles.itemsText}>{item.name}</Text>
                                <Text style={styles.itemsText}>{item.quantity}</Text>
                                <Text style={styles.itemsText}>{item.comment}</Text>
                                <Image style={styles.checkIcon}
                                    source={item.check} />
                            </View>
                      )
                      }
                    }
                    />
                  </View>
                  <View style={{marginTop: -Dimensions.get('screen').height*.04}}>
                    <Text style={styles.dropText}>Phone: 123-456-789</Text>
                    <Text style={styles.dropText}>Email: ab.22@dartmouth.edu</Text>
                    <Text style={styles.dropText}>Drop-off Location: Baker</Text>
                  </View>
                  <View style={styles.button}>
                      <PrimaryButton title={'Status Update'} backgroundColor={ '#6DC4E0'} height={Dimensions.get('screen').height*.06} fontSize={28}/>
                  </View>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainView: {
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop: Dimensions.get('screen').height*.02
  },
  subView: {
    flexDirection: 'row', 
    paddingHorizontal: Dimensions.get('screen').width*.07,
    marginTop: Dimensions.get('screen').height*.03,
  },
  arrowIcon: {
    width: 25,
    height: 20,
  },
  browseText: {
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
    width: 200,
    height: Dimensions.get('screen').height*.03,
    marginLeft: Dimensions.get('screen').width*.02,
  },
  whiteCard: {
    width: Dimensions.get('screen').width*.9,
    height: Dimensions.get('screen').height*.7,
    backgroundColor: '#fff',
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    alignItems: 'center',
  },
  nameBox: {
    width: Dimensions.get('screen').width*.8,
    height: Dimensions.get('screen').height*.1,
    backgroundColor: '#605DF1',
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    marginTop: Dimensions.get('screen').height*.02,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  nameText: {
    fontSize: 40,
    fontFamily: 'Montserrat-SemiBold',
    color: '#fff',
    width: 215,
    height: Dimensions.get('screen').height*.06,
  },
  itemInfo: {
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    color: '#fff',
  },
  itemsText: {
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
    color: '#fff',
  },
  dropText: {
    fontSize: Dimensions.get('screen').height*.025,
    fontFamily: 'Montserrat-Regular',
    color: '#605DF1',
    width: 300,
    textAlign: 'left',
    marginBottom: Dimensions.get('screen').height*.01,
  },
  checkIcon: {
    width: 22, 
    height: 22,
  },
  table : {
    height: Dimensions.get('screen').height*.3, 
    width: Dimensions.get('screen').width*.8,
  },
  tableRows: {
    padding: Dimensions.get('screen').height*.02, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    opacity: 0.9, 
    height: Dimensions.get('screen').height*.3/4, 
    width: Dimensions.get('screen').width*.8,
  },
  button : {
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000000', 
    shadowOpacity: 0.25, 
    shadowRadius: 5,
  },
});
