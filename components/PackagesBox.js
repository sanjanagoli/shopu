import React from 'react';
import { StyleSheet, View, Dimensions, LayoutAnimation, TouchableOpacity, Text} from 'react-native';
import PrimaryButton from './../components/PrimaryButton';

var CustomLayoutAnimation = {
    duration: 50,
    create: {
      type: LayoutAnimation.Types.linear,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {
      type: LayoutAnimation.Types.linear,
    },
  };


export default class PackagesBox extends React.Component {
    static navigationOptions = {
        header: null,
        };
        
    constructor(props) {
        super(props);
        this.state = {
            expandBox: false,
        } 
    };
    expand = () => {
        LayoutAnimation.configureNext(CustomLayoutAnimation);
        this.setState (
            {expandBox: !this.state.expandBox} 
          )
        
    } 
    onPress = () => {
        this.props.navigation.navigate('RequestStatus', {
            confirm: this.props.item.confirmedEmail,
            item: this.props.item,
      });
    }

    renderFunction = () => {
        if(!this.state.expandBox) {
            return (
                <TouchableOpacity onPress={this.expand}>         
                    <View style={[styles.rectangles]}>
                        <View style={styles.subView}>
                            <Text style = {styles.name}>{this.props.firstName}</Text>
                            <Text style = {styles.location}>{this.props.location}</Text>
                        </View>
                        <Text style = {styles.packageSize}>{this.props.packageSize}</Text>
                    </View>    
                </TouchableOpacity>   
            );
        } 
        return (
            <TouchableOpacity onPress={this.expand}>      
                <View style={[styles.bigRectangles]}>
                    <View style={styles.subView}>
                        <Text style = {styles.name}>{this.props.firstName}</Text>
                        <Text style = {styles.location}>{this.props.location}</Text>
                    </View>
                    <Text style = {styles.packageSize}>{this.props.packageSize}</Text>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={this.onPress} title={'Accept'} backgroundColor={ '#19C6D1'} height={Dimensions.get('screen').height*.05} fontSize={25}/>
                    </View>
                </View>  
            </TouchableOpacity>
        );
         
    }
    

  render() {
    return (
        <View>
            {this.renderFunction()}
        </View>
    )
  }
}

const styles = StyleSheet.create({
    rectangles: {
        backgroundColor: '#fff',
        width: Dimensions.get("screen").width*.90,
        height: Dimensions.get("screen").height*.17,
        marginTop: Dimensions.get("screen").height*.035,
        borderColor: '#19C6D1',
        borderWidth: 1.5,
        borderRadius: 5,
        shadowOffset: { width: 0, height: Dimensions.get("screen").height*.005 },
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowRadius: 5,
      },
      bigRectangles: {
        backgroundColor: '#fff',
        width: Dimensions.get("screen").width*.90,
        height: Dimensions.get("screen").height*.25,
        marginTop: Dimensions.get("screen").height*.035,
        borderColor: '#19C6D1',
        borderWidth: 1.5,
        borderRadius: 5,
        shadowOffset: { width: 0, height: Dimensions.get("screen").height*.005 },
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowRadius: 5,
      },
      subView: {
        flexDirection: 'row', 
        alignItems: 'center',
        width: Dimensions.get("screen").width,
      },
      name: {
        fontSize: 30,
        color: '#212121',
        textAlign: 'left',
        fontFamily: 'Montserrat-Bold',
        marginLeft: Dimensions.get("screen").width*.06,
        paddingTop: Dimensions.get("screen").height*.03,
        paddingRight: Dimensions.get("screen").width*.40,
      },
      packageSize: {
        fontSize: 18,
        color:  '#212121',
        textAlign: 'left',
        fontFamily: 'Montserrat-Medium',
        marginLeft: Dimensions.get("screen").width*.06,
        marginTop: Dimensions.get("screen").height*.015,
      },
      location: {
        fontSize: 18,
        color:  '#212121',
        textAlign: 'left',
        fontFamily: 'Montserrat-Bold',
        marginLeft: Dimensions.get("screen").width*.02,
        paddingHorizontal: Dimensions.get("screen").width*.05,
        paddingTop: Dimensions.get("screen").height*.03,
      },
      buttonContainer: {
        width: Dimensions.get("screen").width*.65, 
        marginLeft: Dimensions.get('screen').width*.125, 
        marginTop: Dimensions.get('screen').height*.018
      },
});
