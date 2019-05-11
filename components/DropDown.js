import React from 'react';
import { StyleSheet, Text, View, Picker, Modal, TouchableOpacity, Image, Dimensions} from 'react-native';

const window = Dimensions.get("window")

export default class DropDown extends React.Component {

  items = () => {
    let items = this.props.items
    let itemMap = items.map((item)=> {
      return (
        <Picker.Item label={item.label} value={item.value} key={(item, index) => index.toString()}/>
      )
    })
    return itemMap;
  }
  
  constructor(props) {
    super(props);

    this.state = {
      pickerDisplayed: false
    }
  }

  
  togglePicker() {
    this.setState({
      pickerDisplayed: !this.state.pickerDisplayed
    })
    this.props.firstOption()
  }

  togglePickerClose() {
    this.setState({
      pickerDisplayed: !this.state.pickerDisplayed
    })
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.togglePicker()}>
            <Image style={styles.downArrowIcon}
                source={require('./../assets/images/chevron.png')} />
        </TouchableOpacity>
        <Modal visible={this.state.pickerDisplayed} animationType={"slide"} transparent={true}>
            <Picker
            style={{backgroundColor: '#f9f9f9', position: 'absolute', bottom: 0, left: 0, right: 0 }}
            selectedValue={this.props.selectedValue}
            onValueChange={(itemValue, itemIndex) => {this.props.setState(itemValue)}}>
            {this.items()}
            </Picker>
            <TouchableOpacity style={styles.doneTouchable} onPress={() => this.togglePickerClose()}>
              <Text style={styles.doneText}>Done</Text>
            </TouchableOpacity>
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
  doneTouchable: {
    position: 'absolute', 
    top: window.height*.77, 
    left: window.width*.8,
  },
  doneText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 17,
    color: '#605DF1'
  }
});
