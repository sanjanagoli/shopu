import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, FlatList, TouchableOpacity} from 'react-native';
import PrimaryButton from './../components/PrimaryButton';
import OrangeBackground from './../components/OrangeBackground';
import Toolbar from './../components/Toolbar'

const window = Dimensions.get("window")
<<<<<<< HEAD
=======

>>>>>>> 75fcfbec91e5403df64781cd39ca0101de9e35af
let colors = ['#605DF1', '#6DC4E0']

export default class RequestStatusTest extends React.Component { 
  constructor(props){
    super(props)
    this.state = {
      items : [
        {
          name: 'Apple',
          quantity: 3,
          comment: 'Granny Smith',
          checked: false,
          check: require('./../assets/images/checkbox.png'),
        },
        {
          name: 'Apple',
          quantity: 3,
          comment: 'Granny Smith',
          checked: false, 
          check: require('./../assets/images/checkbox.png'),
        },
        {
          name: 'Apple',
          quantity: 3,
          comment: 'Granny Smith',
          checked: false,
          check: require('./../assets/images/checkbox.png'),
        }
      ]
    }
  }

  static navigationOptions = {
    header: null,
    };

  renderCheck = (checkBoxState) => {
        console.log("reached: " + checkBoxState);
        if (checkBoxState) {
            return (<Image style={styles.checkIcon} source={require('./../assets/images/check.png')} />)
        }
        return (<Image source ={require('./../assets/images/checkbox.png')} style={styles.checkIcon} />)
  }
  
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
                      data={this.state.items}
                      keyExtractor={(item, index) => index.toString()}
                      extraData={this.state}
                      renderItem={
                        ({item, index}) => {
                        return (
                            <View style={[styles.tableRows, {backgroundColor: colors[index % colors.length]}]}>
                                <Text style={styles.itemsText}>{item.name}</Text>
                                <Text style={styles.itemsText}>{item.quantity}</Text>
                                <Text style={styles.itemsText}>{item.comment}</Text>
                                <TouchableOpacity 
                                    onPress={() => {
                                      newItems = this.state.items;
                                      newItems[index].checked = !newItems[index].checked;
                                      console.log(this.state.items[index].checked);
                                      this.setState({items: newItems})
                                    }}>
                                    {this.renderCheck(this.state.items[index].checked)}
                                </TouchableOpacity>
                                
                            </View>
                      )
                      }
                    }
                    />
                  </View>
                  <View style={{marginTop: -Dimensions.get('screen').height*.04}}>
                    <View style={{flexDirection: 'row' }}>
                      <Text style={styles.dropText}>Phone: </Text>
                      <Text style={styles.dropText}>123-456-789 </Text>
                    </View>
                    <View style={{flexDirection: 'row' }}>
                      <Text style={styles.dropText}>Email: </Text>
                      <Text style={styles.dropText}>ab.22@dartmouth.edu </Text>
                    </View>
                    <View style={{flexDirection: 'row' }}>
                      <Text style={styles.dropText}>Location: </Text>
                      <Text style={styles.dropText}>Baker </Text>
                    </View>
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
