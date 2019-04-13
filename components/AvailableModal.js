import React from 'react';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator, TouchableOpacity} from 'react-native';
import PrimaryButton from './PrimaryButton';

let items = [
  {
    name: 'Ijemma',
    packageSize: 'Heavy - 1 package',
    location: 'River',
  },
]

export default class AvailableModal extends React.Component {
  constructor(props){
    super(props);
      this.state = {items: ['Ijemma', 'Heavy - 1 package', 'River']};
  }

  static navigationOptions = {
    header: null,
    };


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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get("screen").height,
    width:Dimensions.get("screen").width,
  },
  blueBox: {
    backgroundColor: '#6DC4E0',
    width:Dimensions.get("screen").width*.9,
    height: Dimensions.get("screen").height*.3,
    justifyContent: 'center',
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
