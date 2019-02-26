import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontLoad from './components/FontLoad';
import CTAbutton from './components/CTAbutton';

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
	        <CTAbutton backgroundColor={'#605DF1'} title={'Submit!'} height={40}/>
	      </View>
    ) : null
    )
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


