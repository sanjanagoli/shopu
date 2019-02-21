import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, FlatList, ImageBackground} from 'react-native';
import PrimaryButton from './../components/primary_button';

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

export default class Request extends React.Component { 
  render() {
    return (
        <ImageBackground style={styles.background}
              source={require('./../assets/images/background.png')}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 45, paddingHorizontal: 20}}>
              <Image style={styles.shoppingBagicon}
                  source={require('./../assets/images/shopping_bag.png')} />
              <Image style={styles.personIcon}
                  source={require('./../assets/images/person.png')} />
            </View>
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
                  <View style={[styles.tableRows, {marginTop: 30, backgroundColor: '#6DC4E0'}]}>
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
                  <Text style={styles.dropText}>Approximate Total: $25.00 Drop-Off Location: Baker</Text>
                  <View style={styles.acceptButton}>
                      <PrimaryButton title={'Accept'} backgroundColor={ '#FF715B'} height={65} fontSize={28}/>
                  </View>
                </View>
            </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  mainView: {
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop: 15
  },
  subView: {
    flexDirection: 'row', 
    paddingHorizontal: 20,
    marginTop: 20
  },
  shoppingBagicon: {
    width: 35,
    height: 40,
  },
  personIcon: {
    width: 42,
    height: 40,
  },
  arrowIcon: {
    width: 30,
    height: 25,
  },
  browseText: {
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
    width: 200,
    height: 25,
    marginLeft: 10
  },
  whiteCard: {
    width: 0.9*window.width,
    height: 0.65*window.height,
    backgroundColor: '#fff',
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    alignItems: 'center',
  },
  nameBox: {
    width: 0.8*window.width,
    height: 100,
    backgroundColor: '#605DF1',
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    marginTop: 20,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  nameText: {
    fontSize: 40,
    fontFamily: 'Montserrat-SemiBold',
    color: '#fff',
    width: 215,
    height: 55,
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
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    color: '#605DF1',
    width: 300,
    height: 80,
    textAlign: 'center',
    lineHeight: 40,
    marginBottom: 50
  },
  checkIcon: {
    width: 22, 
    height: 22
  },
  table : {
    height: 200, 
    width: 0.8*window.width
  },
  tableRows: {
    padding: 14, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    opacity: 0.9, 
    height: 50, 
    width: 0.8*window.width
  },
  acceptButton : {
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000000', 
    shadowOpacity: 0.25, 
    shadowRadius: 5,
  },
});
