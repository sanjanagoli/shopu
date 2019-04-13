import React from 'react';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator} from 'react-native';

export default class AvailableModal extends React.Component {
  static navigationOptions = {
    header: null,
    };

    //Commenting this out so it can run because this screen is not merged yet
    // accept = () => {
    //     this.props.navigation.navigate('AvailablePackages')
    // }


  render() {
    return (
        <View style={styles.container}>
            <View style={styles.blueBox}>
              <Text style = {styles.name}>{item.name}</Text>
              <Text style = {styles.packageSize}>{item.packageSize}</Text>
              <Text style = {styles.location}>{item.location}</Text>
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
    backgroundColor: 'rgba(92, 92, 92, 0.50)',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get("screen").height,
    width:Dimensions.get("screen").width,
  },
  blueBox: {
    backgroundColor: '#6DC4E0',
    width:Dimensions.get("screen").width*.9,
    height: Dimensions.get("screen").height*.4,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginLeft: Dimensions.get("screen").width*.02,
  },
  packageSize: {
    fontSize: 25,
    color:  '#fff',
    textAlign: 'left',
    fontFamily: 'Montserrat-Bold',
    marginLeft: Dimensions.get("screen").width*.02,
  },
  location: {
    fontSize: 25,
    color:  '#fff',
    textAlign: 'left',
    fontFamily: 'Montserrat-Bold',
    marginLeft: Dimensions.get("screen").width*.02,
  },
});
