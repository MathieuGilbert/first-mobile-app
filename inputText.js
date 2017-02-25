import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Text to pizzafy."
          onChangeText={this._handleChange}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }

  _handleChange = (text) => {
    this.setState({text});
  }
}
