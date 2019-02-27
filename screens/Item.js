import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TextInput} from 'react-native';
import PrimaryButton from './../components/PrimaryButton';
import OrangeBackground from './../components/OrangeBackground';

const window = Dimensions.get("window")

export default class RequestProfile extends React.Component { 
  static navigationOptions = {
    header: null,
    };
    
  addToCart = () => {
    this.props.navigation.navigate('YourCart')
  }

  browseOptions = () => {
    this.props.navigation.goBack('Results')
  }

  constructor(props) {
    super(props);
    this.state = { comments: ' ',};
  }
  
  render() {
    return (
        <View style={styles.container}>
          <OrangeBackground/>
            <View style={styles.toolbar}>
              <Image style={styles.cartIcon}
                  source={require('./../assets/images/top_shopping_cart.png')} />
              <Image style={styles.personIcon}
                  source={require('./../assets/images/person.png')} />
            </View>
            <TouchableOpacity style={styles.subView} onPress={this.browseOptions}>
              <Image style={styles.arrowIcon}
                  source={require('./../assets/images/back_arrow.png')} />
              <Text style={styles.browseText}>Browse Other Options</Text>
            </TouchableOpacity>
            <View style={styles.mainView}>
              <View style={styles.whiteCard}>
                  <View style={styles.itemBox}>
                    <Text style={styles.itemText}>Apple - Walmart</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={styles.appleIcon}
                            source={require('./../assets/images/apple.png')} />
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.descriptionText}>$1.25 per pound</Text>
                            <Text style={styles.descriptionText}>Granny Smith, Fuji</Text>
                            <Text style={styles.descriptionText}>ETA: 2 hours</Text>
                        </View>
                    </View>
                  </View>
                  <View style={{textAlign: 'left'}}>
                    <Text style={styles.generalText}>Quantity:</Text>
                    <Image style={styles.downArrowIcon}
                        source={require('./../assets/images/Vector.png')} />
                    <View style={styles.answerLine} />
                    <Text style={styles.generalText}>Comments:</Text>
                    <View style={styles.answerLine}>
                        <TextInput
                        style={styles.responseText}
                        maxLength = {70}
                        onChangeText={(comments) => this.setState({comments})}
                        value={this.state.comments}
                        />
                    </View>
                  </View>
                  <View style={styles.addToCartButton}>
                      <PrimaryButton onPress={this.addToCart} title={'Add to Cart!'} backgroundColor={ '#FF715B'} height={65} fontSize={28}/>
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
    marginTop: window.height*.02
  },
  subView: {
    flexDirection: 'row', 
    paddingHorizontal: window.width*.05,
    marginTop: window.height*.02
  },
  toolbar: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: window.height*.05, 
    paddingHorizontal: window.width*.05
  },
  cartIcon: {
    width: 43,
    height: 44,
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
    marginLeft: window.width*.02
  },
  whiteCard: {
    width: window.width*.9,
    height: window.height*.65,
    backgroundColor: '#fff',
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    alignItems: 'center',
  },
  itemBox: {
    width: window.width*.8,
    height: window.height*.22,
    backgroundColor: '#605DF1',
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    marginTop: window.height*.02,
    justifyContent: 'center'
  },
  appleIcon: {
      width: 88,
      height: 75,
      marginLeft: window.width*.004,
  },
  itemText: {
    fontSize: 30,
    fontFamily: 'Montserrat-Medium',
    color: '#fff',
    textAlign: 'center',
    marginBottom: window.height*.02
  },
  descriptionText: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
    marginVertical: window.height*.001
  },
  generalText: {
    fontSize: 25,
    fontFamily: 'Montserrat-Regular',
    color: '#605DF1',
    marginTop: window.height*.03,
  },
  answerLine: {
    borderBottomColor: '#6DC4E0',
    borderBottomWidth: 2, 
    width: window.width*.8, 
    marginTop: window.height*.005,
  },
  downArrowIcon: {
    width: 21,
    height: 26,
    marginTop: window.height*.04,
    marginLeft: window.width*.725
  },
  responseText: {
    fontSize: 18, 
    fontFamily: 'Montserrat-Regular', 
    color: '#605DF1',
    marginTop: window.height*.04
  },
  addToCartButton: {
    marginTop: window.height*.05
  }
});