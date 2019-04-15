import React from 'react';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator, TouchableOpacity} from 'react-native';
import PrimaryButton from './PrimaryButton';


export default class AvailableModal extends React.Component {
  constructor(props){
    super(props);
      this.state = {items: [this.props.name, this.props.packageSize, this.props.location]};
  }

  static navigationOptions = {
    header: null,
    };
  
  // accept = () => {
  //   this.props.navigation.navigate('AvailableDeliveries')
  //   }

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.blueBox}>
              <Text style = {styles.name}>{this.state.items[0]}</Text>
              <Text style = {styles.packageSize}>{this.state.items[1]}</Text>
              <Text style = {styles.location}>{this.state.items[2]}</Text>
              <TouchableOpacity onPress={this.accept}>
                <PrimaryButton backgroundColor={'#605DF1'} title={"Accept"} height={50} fontSize={30}/>
              </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(92, 92, 92, 0.50)',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get("screen").height*1.5,
    width:Dimensions.get("screen").width,
    top: -Dimensions.get("screen").height*.5,
    position: 'absolute',
  },
  blueBox: {
    backgroundColor: '#6DC4E0',
    width:Dimensions.get("screen").width*.9,
    height: Dimensions.get("screen").height*.26,
    top: Dimensions.get("screen").height*.75,
    position: 'absolute',
    shadowOffset: { width: 0, height: Dimensions.get("screen").height*.005 },
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  name: {
    fontSize: 30,
    color:  '#fff',
    textAlign: 'left',
    fontFamily: 'Montserrat-Bold',
    marginLeft: Dimensions.get("screen").width*.08,
    marginTop: Dimensions.get("screen").height*.03,
  },
  packageSize: {
    fontSize: 25,
    color:  '#fff',
    textAlign: 'left',
    fontFamily: 'Montserrat-Bold',
    marginLeft: Dimensions.get("screen").width*.08,
  },
  location: {
    fontSize: 25,
    color:  '#fff',
    textAlign: 'left',
    fontFamily: 'Montserrat-Bold',
    marginLeft: Dimensions.get("screen").width*.08,
  },
});
