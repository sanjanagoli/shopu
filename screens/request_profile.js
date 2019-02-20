import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, FlatList} from 'react-native';

const window = Dimensions.get("window")

let colors = ['#6DC4E0', '#605DF1']

export default class Request extends React.Component { 
  render() {
    return (
          <View style={styles.container}>
            <View style={styles.topBanner} />
            <Image style={styles.shoppingBagicon}
                source={require('./../assets/images/shopping_bag.png')} />
            <Image style={styles.personIcon}
                source={require('./../assets/images/person.png')} />
            <Image style={styles.arrowIcon}
                source={require('./../assets/images/back_arrow.png')} />
            <Text style={styles.browseText}>Browse Other Options</Text>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.whiteCard} />
              <View style={styles.nameBox} />
              <FlatList
                data={[{name: 1},{name: 2},{name: 3}]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={
                  ({item, index}) => {
                  return (
                      <View style={{backgroundColor: colors[index % colors.length]}}>
                        <View style={styles.tableRows} />
                      </View>
                )
                }
              }
              />
              <Text style={styles.dropText}>Approximate Total: $25.00 Drop-Off Location: Baker</Text>
              <View style={styles.acceptBox} />
              <Text style={styles.acceptText}>Accept</Text>
              <Image style={styles.checkIcon}
                source={require('./../assets/images/check.png')} />
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
  topBanner: {
    flexDirection: 'row',
    width: window.width,
    height: 350,
    backgroundColor: '#FF715B',
  },
  shoppingBagicon: {
    width: 35,
    height: 40,
    top: -300,
    marginLeft: 25 
  },
  personIcon: {
    width: 42,
    height: 40,
    top: -335,
    marginLeft: 335
  },
  arrowIcon: {
    width: 22,
    height: 18,
    top: -320,
    marginLeft: 25
  },
  browseText: {
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
    width: 200,
    height: 25,
    marginLeft: 60, 
    top: - 340,
  },
  whiteCard: {
    flexDirection: 'row',
    width: 0.9*window.width,
    height: 0.65*window.height,
    backgroundColor: '#fff',
    top: 110,
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  nameBox: {
    flexDirection: 'row',
    width: 0.8*window.width,
    height: 100,
    backgroundColor: '#605DF1',
    top: -450,
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  tableRows: {
    flexDirection: 'row',
    width: 0.9*window.width,
    height: 50,
    opacity: 0.9,
    top: -450,
    backgroundColor: colors[0]
  },
  mainColumn: {
    justifyContent: 'space-between',
  },
  dropText: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    color: '#605DF1',
    width: 300,
    height: 80,
    top: -150,
    textAlign: 'center',
    lineHeight: 40
  },
  acceptBox: {
    flexDirection: 'row',
    width: 0.5*window.width,
    height: 65,
    backgroundColor: '#FF715B',
    top: -100,
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  acceptText: {
    fontSize: 28,
    fontFamily: 'Montserrat-SemiBold',
    color: '#fff',
    width: 100,
    height: 35,
    top: -150,
    textAlign: 'center',
    marginRight: 40
  },
  checkIcon: {
    width: 26,
    height: 26,
    top: -180,
    marginLeft: 110
  },
});
