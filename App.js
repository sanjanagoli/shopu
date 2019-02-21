import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontLoad from './components/FontLoad';
import ShoppingList from './screens/ShoppingList';


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
          <ShoppingList/>
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
