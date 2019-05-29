import React from 'react';
import { StyleSheet, View, Dimensions, LayoutAnimation, TouchableOpacity, Text } from 'react-native';
import PrimaryButton from './../components/PrimaryButton';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { currentDelivery } from '../reducers/completedReducer';

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

const database = firebase.database();

class PackagesBox extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      expandBox: false,
      name: '',
      location: '',
      email: '',
    }
  };

  componentWillMount = () => {
    const self = this;
    this.setState({ email: this.getEmail() }, () => {
      self.setState({ name: this.getName() });
      self.setState({ location: this.getLocation() });
    })
  }

  getName = () => {
    for (let i = 0; i < this.props.users.length; i++) {
      if (this.props.users[i].key === this.props.item.buyer) {
        return this.props.users[i].value.name;
      }
    }
  }

  getLocation = () => {
    for (let i = 0; i < this.props.users.length; i++) {
      if (this.props.users[i].key === this.props.item.buyer) {
        return this.props.users[i].value.location;
      }
    }
  }

  getEmail = () => {
    for (let i = 0; i < this.props.users.length; i++) {
      if (this.props.users[i].key === this.props.item.buyer) {
        return this.props.users[i].value.email;
      }
    }
  }

  expand = () => {
    LayoutAnimation.configureNext(CustomLayoutAnimation);
    this.setState(
      { expandBox: !this.state.expandBox }
    )

  }
  onPress = (item) => {
    this.props.navigation.navigate('RequestStatus', {
      confirm: item.confirmedEmail,
      item: item,
    });
  }

  renderFunction = () => {
    if (!this.state.expandBox) {
      return (
        <TouchableOpacity onPress={this.expand}>
          <View style={[styles.rectangles]}>
            <View style={styles.subView}>
              <Text style={styles.name}>{this.state.name}</Text>
              <Text style={styles.location}>{this.state.location}</Text>
            </View>
            <Text style={styles.packageSize}>{this.props.packageSize} - {this.props.packageNumber}</Text>
            {/* <Text style={styles.packageSize}>{this.props.packageNumber}</Text> */}
            <Text style={styles.email}>{this.state.email}</Text>
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity onPress={this.expand}>
        <View style={[styles.bigRectangles]}>
          <View style={styles.subView}>
            <Text style={styles.name}>{this.state.name}</Text>
            <Text style={styles.location}>{this.state.location}</Text>
          </View>
          <Text style={styles.packageSize}>{this.props.packageSize} - {this.props.packageNumber}</Text>
          {/* <Text style={styles.packageSize}>{this.props.packageNumber}</Text> */}
          <Text style={styles.email}>{this.state.email}</Text>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={this.onPress.bind(this, this.props.item)} title={'Accept'} backgroundColor={'#19C6D1'} height={Dimensions.get('screen').height * .05} fontSize={25} />
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
    width: Dimensions.get("screen").width * .90,
    height: Dimensions.get("screen").height * .19,
    marginTop: Dimensions.get("screen").height * .035,
    borderColor: '#19C6D1',
    borderWidth: 1.5,
    borderRadius: 5,
    shadowOffset: { width: 0, height: Dimensions.get("screen").height * .005 },
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  bigRectangles: {
    backgroundColor: '#fff',
    width: Dimensions.get("screen").width * .90,
    height: Dimensions.get("screen").height * .25,
    marginTop: Dimensions.get("screen").height * .035,
    borderColor: '#19C6D1',
    borderWidth: 1.5,
    borderRadius: 5,
    shadowOffset: { width: 0, height: Dimensions.get("screen").height * .005 },
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  subView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get("screen").width*.8,
  },
  name: {
    fontSize: 21,
    color: '#212121',
    textAlign: 'left',
    fontFamily: 'Montserrat-Bold',
    marginLeft: Dimensions.get("screen").width * .06,
    paddingTop: Dimensions.get("screen").height * .03,
    paddingRight: Dimensions.get("screen").width * .05,
  },
  packageSize: {
    fontSize: 18,
    color: '#212121',
    textAlign: 'left',
    fontFamily: 'Montserrat-Medium',
    marginLeft: Dimensions.get("screen").width * .06,
    marginTop: Dimensions.get("screen").height * .001,
  },
  location: {
    fontSize: 18,
    color: '#212121',
    textAlign: 'left',
    fontFamily: 'Montserrat-Bold',
    marginLeft: Dimensions.get("screen").width * .02,
    paddingHorizontal: Dimensions.get("screen").width * .05,
    paddingTop: Dimensions.get("screen").height * .03,
  },
  email: {
    fontSize: 18,
    color: '#212121',
    textAlign: 'left',
    fontFamily: 'Montserrat-Light',
    marginLeft: Dimensions.get("screen").width * .06,
    marginTop: Dimensions.get("screen").height * .001,
  },
  buttonContainer: {
    width: Dimensions.get("screen").width * .65,
    marginLeft: Dimensions.get('screen').width * .125,
    marginTop: Dimensions.get('screen').height * -.025
  },
});

const mapStateToProps = state => {
  return {
    currentId: state.id
  }
}

const mapDispatchToProps = {
  currentDelivery
}

export default connect(mapStateToProps, mapDispatchToProps)(PackagesBox);
