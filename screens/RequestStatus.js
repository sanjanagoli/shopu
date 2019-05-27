import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TextInput } from 'react-native';
import PrimaryButton from './../components/PrimaryButton';
import OrangeBackground from './../components/OrangeBackground';
import Toolbar from '../components/Toolbar';
import StatusUpdateModal from '../components/StatusUpdateModal';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { currentDelivery } from '../reducers/completedReducer';


const window = Dimensions.get("window")


class RequestStatus extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userArray: {
      },
      userId: null,
      isConfirmed: null,
      size: null,
    };
  };

  componentWillMount() {
    //writeNewPost(5, 'username', 'user@email.com', 'user', 'name', 'location');
    const { params } = this.props.navigation.state;
    this.fetchData();
    this.setState({ userId: params.item.buyer, isConfirmed: params.item.confirmedEmail })
    let self = this; // sets the correct context for setState
    const interval = setInterval(() => { // setInterval creates a new context that doesn't has the same this as every other function
      this.updateConfirmed(interval, self);
    }, 500)
  }

  updateConfirmed = (interval, self) => {
    const { params } = this.props.navigation.state;
    var fireBaseResponse = firebase.database().ref(`deliveries/delivery${params.item.id}`);
    this.props.currentDelivery(params.item.id)
    fireBaseResponse.on("value", function (snapshot) {
      var changedPost = snapshot.val();
      if (changedPost == null) {
        self.props.navigation.navigate('Payment')
      } else if (changedPost.confirmedEmail) {
        clearInterval(interval)
        self.setState({ isConfirmed: changedPost.confirmedEmail, size: changedPost.packageSize }); // uses context that was set outside of setInterval
      }
    });
  }

  fetchData = async () => {

    var data2 = [];

    fireBaseResponse = firebase.database().ref('users');
    fireBaseResponse.once('value').then(snapshot => {
      snapshot.forEach(item => {
        var temp = item.val();

        data2.push({
          key: item.key,
          value: temp
        });
        return false;
      });

      this.setState(
        { userArray: data2 }
      )
    });

  }

  static navigationOptions = {
    header: null,
  };


  statusUpdate = () => {
    this.setState({
      modal: !this.state.modal
    })
  }


  renderModal = (phoneNumber) => {
    if (this.state.modal) {
      return <StatusUpdateModal onPress={this.statusUpdate} phone={phoneNumber} />
    }
    else {
      return null
    }
  }

  browseOptions = () => {
    this.props.navigation.navigate('ShoppingList')
  }


  getFirstName = () => {
    for (i = 0; i < this.state.userArray.length; i++) {
      if (this.state.userArray[i].key == this.state.userId) {
        return this.state.userArray[i].value.firstName;
      }
    }
  }

  getName = () => {
    for (i = 0; i < this.state.userArray.length; i++) {
      if (this.state.userArray[i].key == this.state.userId) {
        return this.state.userArray[i].value.name;
      }
    }
  }

  getEmail = () => {
    for (i = 0; i < this.state.userArray.length; i++) {
      if (this.state.userArray[i].key == this.state.userId) {
        return this.state.userArray[i].value.email;
      }
    }
  }

  getPhone = () => {
    for (i = 0; i < this.state.userArray.length; i++) {
      if (this.state.userArray[i].key == this.state.userId) {
        return this.state.userArray[i].value.phoneNumber;
      }
    }
  }

  getLocation = () => {
    for (i = 0; i < this.state.userArray.length; i++) {
      if (this.state.userArray[i].key == this.state.userId) {
        return this.state.userArray[i].value.location;
      }
    }
  }

  render() {

    if (!this.state.isConfirmed) {
      return (
        <View style={styles.container}>
          <Toolbar pageType={'Driver'} navigation={this.props.navigation} title={'Waiting'} />
          <View style={styles.mainView}>
            <View style={styles.whiteCard}>
              <Text style={styles.itemText}>Waiting for Confirmation!</Text>
              <Text style={styles.descriptionText}>Come back when {this.getName()}{"'"}s mail request is confirmed!</Text>
            </View>
          </View>
        </View>

      );
    } else {
      return (
        <View style={styles.container}>
          <Toolbar pageType={'Driver'} navigation={this.props.navigation} title={'Pickup Confirmed'} />
          <View style={styles.mainView}>
            <View style={styles.whiteCard}>
              <Text style={styles.item2Text}>Your Pickup is Confirmed!</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.nameText}>{this.getName()}</Text>
              <Text style={styles.packageSizeText}>{this.state.size}</Text>
              <Text style={styles.packageLocationText}>{this.getLocation()}</Text>
              <Text style={styles.emailText}>{this.getEmail()}</Text>
              <Text style={styles.phoneText}>{this.getPhone()}</Text>
            </View>
            <View style={styles.button}>
              <PrimaryButton onPress={this.statusUpdate} title={'Status Update'} backgroundColor={'#19C6D1'} height={65} fontSize={28} />
            </View>
            {this.renderModal(this.getPhone())}
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -window.height * .02
  },
  subView: {
    flexDirection: 'row',
    paddingHorizontal: window.width * .05,
    marginTop: window.height * .02
  },
  textContainer: {
    textAlign: 'left',
    marginTop: -Dimensions.get('screen').height * .4,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: window.height * .05,
    paddingHorizontal: window.width * .05
  },
  whiteCard: {
    width: window.width * .9,
    height: window.height * .65,
    marginTop: window.height * .08,
    backgroundColor: '#fff',
    shadowOffset: { width: 0, height: 5 },
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#19C6D1'
  },
  itemText: {
    fontSize: 40,
    fontFamily: 'Montserrat-Bold',
    color: '#262626',
    textAlign: 'center',
    marginTop: -window.height * .1,
  },
  item2Text: {
    fontSize: 36,
    fontFamily: 'Montserrat-Bold',
    color: '#262626',
    textAlign: 'center',
    marginTop: -window.height * .4,
  },
  descriptionText: {
    fontSize: 25,
    fontFamily: 'Montserrat-Light',
    color: '#262626',
    marginHorizontal: Dimensions.get('screen').width * 0.03,
    marginTop: window.height * .1,
    marginLeft: window.width * .07,
  },
  nameText: {
    fontSize: 28,
    fontFamily: 'Montserrat-Medium',
    color: '#262626',
    marginLeft: -window.width * 0.04,
  },
  emailText: {
    fontSize: 22,
    fontFamily: 'Montserrat-Light',
    color: '#262626',
    marginLeft: -window.width * 0.04,
  },
  phoneText: {
    fontSize: 22,
    fontFamily: 'Montserrat-Light',
    color: '#262626',
    marginLeft: -window.width * 0.04,
  },
  packageLocationText: {
    fontSize: 22,
    fontFamily: 'Montserrat-Medium',
    color: '#262626',
    marginLeft: -window.width * 0.04,
  },
  packageSizeText: {
    fontSize: 22,
    fontFamily: 'Montserrat-Medium',
    color: '#262626',
    marginLeft: -window.width * 0.04,
  },
  button: {
    marginTop: window.height * .06,
  }
});

const mapStateToProps = state => {
  return {
    currentId: state.id
  }
}

const mapDispatchtoProps = {
  currentDelivery
}

export default connect(mapStateToProps, mapDispatchtoProps)(RequestStatus)
