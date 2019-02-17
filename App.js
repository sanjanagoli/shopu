import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PrimaryButton from './components/primary_button';
import FontLoad from './components/FontLoad';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    }
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
          <PrimaryButton backgroundColor={'#FF715B'} title={'Submit!'} height={40} fontSize={30}/>
        </View>
      ) : null
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

