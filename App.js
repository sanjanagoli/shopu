import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PrimaryButton from './components/primary_button';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PrimaryButton backgroundColor={'#FF715B'} title={'Submit!'} height={40}/>
      </View>
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
