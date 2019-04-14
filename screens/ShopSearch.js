import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity, PixelRatio} from 'react-native';
import OrangeBackground from './../components/OrangeBackground';
import FontLoad from './../components/FontLoad';
import Toolbar from './../components/Toolbar';
import PrimaryButton from '../components/PrimaryButton';
import DropDown from './../components/DropDown';

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

  setPicker = (itemValue) => {
    this.setState({ pickerSelection: itemValue})
  }

  static navigationOptions = {
    header: null,
    };
    
    letsgo = () => {
      this.props.navigation.navigate('LoadingScreen')
      }

    constructor(props) {
      super(props);
      this.state = {
        fontLoaded: false,
        comments: ' ', 
        pickerSelection: 'Choose Option',
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
            <Text style={{color: '#ffffff',textAlign: 'center',fontFamily: 'Montserrat-SemiBold', fontSize: this.renderFontSize()}}>mailU!</Text>
            <View style={styles.slantedBlueRectangle} />
            <View style={styles.slantedPurpleRectangle} />
            <View style={styles.whiteCard}>
              <View style={styles.box}>
                <View style={styles.rowBox}>
                  <Text style={styles.searchText}>How big is your mail load?</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.quantityText}>{this.state.pickerSelection}</Text>
                  <View style={{position: 'absolute', marginTop: window.height*.05, marginLeft: window.width*.7}}>
                    <DropDown selectedValue={this.state.pickerSelection} setState={this.setPicker}/>
                  </View>
                  </View>
                <View style={styles.searchLine}/>
                <View>
                <View style={styles.rowBox}>
                  <Text style={styles.searchText2}>How many packages do you have?</Text>
                  </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.quantityText}>{this.state.pickerSelection}</Text>
                  <View style={{position: 'absolute', marginTop: window.height*.05, marginLeft: window.width*.7}}>
                    <DropDown selectedValue={this.state.pickerSelection} setState={this.setPicker}/>
                  </View>
                  </View>
                </View>
                <View style={styles.searchLine}/>
              </View>
            <View style={styles.rectangleLBlue}/>
            <View style={styles.button}/>
              <TouchableOpacity onPress={this.letsgo}>
                <PrimaryButton backgroundColor={'#605DF1'} title={"Let's Go!"} height={60} fontSize={30}/>
              </TouchableOpacity>
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
    marginTop: window.height*-.36,
    flexDirection: 'column',
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
    fontSize: 22,
    color: '#605DF1',
    fontFamily: 'Montserrat-Medium',
    marginTop: window.height*.1,
    marginLeft: window.width*.01,
  },
  searchText2: {
    fontSize: 22,
    color: '#605DF1',
    fontFamily: 'Montserrat-Medium',
    marginTop: window.height*.06,
    marginLeft: window.width*.01,
  },
  box: {
    marginTop: -Dimensions.get('screen').height*0.05,
  },
  button: { 
    marginTop: -Dimensions.get("screen").height*.085,
    width: Dimensions.get("screen").width*.6,
  },
  rowBox: {
    width: window.width*.75, 
    flexDirection: 'row',
  },
  rectangleLBlue: {
    backgroundColor: '#6DC4E0',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get("screen").width*.6,
    height: Dimensions.get('screen').height*0.07,
    marginLeft: Dimensions.get("screen").width*.01,
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    transform: ([{ rotateZ: '7.5deg' }]),
    marginTop: Dimensions.get('screen').height*.05,
  },
  quantityText: {
    fontSize: 22, 
    fontFamily: 'Montserrat-Regular', 
    color: '#605DF1',
    marginTop: window.height*.05,
    textAlign: 'center'
},
});

