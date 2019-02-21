import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, FlatList} from 'react-native';

const window = Dimensions.get("window")

let colors = ['#6DC4E0', '#605DF1']

let items = [
  {
    name: 'Item',
    q: 'Q',
    comment: 'Comments',
    check: require('./../assets/images/check.png'),
  },
  {
    name: 'Apple',
    q: 3,
    comment: 'Granny Smith',
    check: require('./../assets/images/checkbox.png'),
  },
  {
    name: 'Apple',
    q: 3,
    comment: 'Granny Smith',
    check: require('./../assets/images/checkbox.png'),
  },
  {
    name: 'Apple',
    q: 3,
    comment: 'Granny Smith',
    check: require('./../assets/images/checkbox.png'),
  }
]

export default class Request extends React.Component { 
  render() {
    return (
    <View>
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
              <Text style={styles.nameText}>Bob - CVS</Text>
           </View>
           </View>
                <View style={{top: 315, justifyContent: 'center', alignItems: 'center'}}>
                  <FlatList
                  data={items}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={
                    ({item, index}) => {
                    return (
                        <View>
                        <View style={{opacity: 0.8, height: 50, width: 0.8*window.width, backgroundColor: colors[index % colors.length]}}>
                        <View style={{padding: 12, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.itemText}>{item.name}</Text>
                        <Text style={styles.itemText}>{item.q}</Text>
                        <Text style={styles.itemText}>{item.comment}</Text>
                        <Image style={{width: 22, height: 22}}
                              source={item.check} />
                        </View>
                        </View>
                        </View>
                  )
                  }
                }
                />
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
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
    top: 40,
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
    top: -520,
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  nameText: {
    fontSize: 40,
    fontFamily: 'Montserrat-SemiBold',
    color: '#fff',
    width: 215,
    height: 55,
    top: -595,
  },
  tableRows: {
    flexDirection: 'row',
    width: 0.9*window.width,
    height: 50,
    opacity: 0.9,
    top: -150,
    backgroundColor: '#605DF1',
  },
  itemText: {
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
    top: 350,
    textAlign: 'center',
    lineHeight: 40
  },
  acceptBox: {
    flexDirection: 'row',
    width: 0.5*window.width,
    height: 65,
    backgroundColor: '#FF715B',
    top: 400,
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
    top: 350,
    textAlign: 'center',
    marginRight: 40
  },
  checkIcon: {
    width: 26,
    height: 26,
    top: 320,
    marginLeft: 110
  },
});
