import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import OrangeBackground from './../components/OrangeBackground';
import Toolbar from '../components/Toolbar';


export default class OrderComplete extends React.Component {
  static navigationOptions = {
    header: null,
    };
    
    render() {
      return (
        <View style={styles.container}>
        <Toolbar navigation={this.props.navigation}/>
        <View style={styles.rectangle}>
          <Text style={styles.header}>Your mail has been requested!</Text>
          <View style={styles.textBox}>
            <Text style={styles.line}>Wait to get an SMS for further details on order pickup</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.line}>Venmo your deliverer your total once your order is completed!</Text>
          </View>
        </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
  },
  header: {
    color: '#212121',
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
    textAlign: 'center',
    marginTop: Dimensions.get('screen').height*0.05,
    marginBottom: Dimensions.get('screen').height*0.03,
  },
  rectangle: {
    flexDirection: 'column',
    width: Dimensions.get("screen").width*.91,
    height: Dimensions.get("screen").height*.55,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderColor: '#19C6D1',
    borderWidth: 1.5,
    marginTop: Dimensions.get('screen').height*0.15,
  },
  textBox: {
    flexDirection: 'row',
    width: Dimensions.get("screen").width*.82,
    textAlign: 'left',
  },
  line: {
    fontFamily: 'Montserrat-Light',
    fontSize: 25,
    color: '#212121',
    marginTop: Dimensions.get("screen").height*.03,
    marginLeft: Dimensions.get("screen").width*.08,
  },
});
