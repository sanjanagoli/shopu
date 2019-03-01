import React from 'react';
import { StyleSheet, Text, View, Picker, Button, Modal, TouchableOpacity, Image} from 'react-native';

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pickerSelection: 'Default value!',
      pickerDisplayed: false
    }
  }

  setPickerValue(newValue) {
    this.setState({
      pickerSelection: newValue
    })

    this.togglePicker();
  }

  togglePicker() {
    this.setState({
      pickerDisplayed: !this.state.pickerDisplayed
    })
  }

  render() {
    const pickerValues = [
      {
        title: '1',
        value: '1'
      },
      {
        title: '2',
        value: '2'
      },
      {
        title: '3',
        value: '3'
      }
    ]

    return (
      <View>
        <TouchableOpacity onPress={() => this.togglePicker()}>
            <Image style={styles.downArrowIcon}
                source={require('./../assets/images/Vector.png')} />
        </TouchableOpacity>

        <Modal visible={this.state.pickerDisplayed} animationType={"slide"} transparent={true}>
            <Picker
            style={{ backgroundColor: '#fff', position: 'absolute', bottom: 0, left: 0, right: 0 }}
            selectedValue={ this.state.pickerSelection }
            onValueChange={(itemValue, itemIndex) => this.setState({ pickerSelection: itemValue})}>
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />

            </Picker>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  downArrowIcon: {
    width: 21,
    height: 26,
  },
});
