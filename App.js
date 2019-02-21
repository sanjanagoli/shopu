import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import FontLoad from './components/FontLoad';
import Request from './screens/request_profile';

let colors = ['#6DC4E0', '#605DF1']
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
            {/* <FlatList
                data={[{name: 1},{name: 2},{name: 3}]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={
                  ({item, index}) => {
                  return (
                      <View style={{height: 50, width: 0.9*window.width, backgroundColor: colors[index % colors.length]}}>
                      </View>
                )
                }
              }
              /> */}
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
