import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import FontLoad from './components/FontLoad';
import Request from './screens/request_profile';


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
        <View>
          <Request/>
          {/* <Text>Open up App.js to start working on your app!</Text> */}
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

