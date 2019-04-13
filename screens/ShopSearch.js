import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity, PixelRatio} from 'react-native';
import OrangeBackground from './../components/OrangeBackground';
import FontLoad from './../components/FontLoad';
import Toolbar from './../components/Toolbar';
import DropDown from '../components/DropDown';
import AvailableModal from '../components/AvailableModal';

const window = Dimensions.get("window")

export default class ShopSearch extends React.Component {

  renderFontSize = () => {
    if (PixelRatio.get() === 2) {
      return 90
    }
    else if (PixelRatio.get() === 3){
      return 60
    }
  }

  static navigationOptions = {
    header: null,
    };

    constructor(props) {
      super(props);
      this.state = {
        fontLoaded: false,
      }
    }
    
    search = () => {
      this.props.navigation.navigate('LoadingScreen')
    }

    componentWillMount = () => {
      FontLoad.then((res) => {
        this.setState({ fontLoaded: true });
      })
    }
    
  render() {
    return (
      this.state.fontLoaded ? (
        <View style={styles.container}>
          <OrangeBackground/>
          <Toolbar navigation={this.props.navigation}/>
          <View style={styles.mainView}>
            <Text style={{color: '#ffffff', textAlign: 'center',fontFamily: 'Montserrat-SemiBold', fontSize: this.renderFontSize()}}>Let{`'`}s</Text>
            <Text style={{color: '#ffffff',textAlign: 'center',fontFamily: 'Montserrat-SemiBold', fontSize: this.renderFontSize()}}>shopU!</Text>
            <View style={styles.slantedBlueRectangle} />
            <View style={styles.slantedPurpleRectangle} />
            <View style={styles.whiteCard}>
              <View style={{flexDirection: 'row', marginBottom: window.height*.01}}>
                <TouchableOpacity onPress={this.search}>
                  <Image style={styles.searchIcon} 
                      source={require('./../assets/images/search_icon.png')}/>
                </TouchableOpacity>
                <View style={{width: window.width*.75}}>
                  <TextInput style={styles.searchText} placeholder={'Search for a Product'} placeholderTextColor={'#605DF1'}/>
                </View>
              </View>
              <View style={styles.searchLine}/>
            </View>
          </View>
        </View>
      ) : null
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
  slantedBlueRectangle: {
    backgroundColor: '#6DC4E0',
    transform:([{ rotateZ:'10deg'}]),
    width: window.width*1.5,
    height: window.height*.13,
    marginTop: window.height*.1,
  },
  slantedPurpleRectangle: {
    backgroundColor: '#605DF1',
    transform:([{ rotateZ:'10deg'}]),
    width: window.width*1.5,
    height: window.height*.13,
    marginTop: window.height*.03,
  },
  whiteCard: {
    backgroundColor: '#ffffff',
    width: window.width*.9,
    height: window.height*.45,
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: window.height*-.36
  },
  searchLine: {
    backgroundColor: '#6DC4E0',
    width: window.width*.8,
    height: window.height*.003,
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginTop: window.height*.005
  },
  searchText: {
    fontSize: 24,
    color: '#605DF1',
    fontFamily: 'Montserrat-Medium',
    marginTop: window.height*.015,
    marginLeft: window.width*.04

  },
  searchIcon: {
    height: 23,
    width: 22,
    marginTop: window.height*.019
  },
});
