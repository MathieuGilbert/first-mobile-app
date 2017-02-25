import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000)
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style={this.props.style}>{display}</Text>
    )
  }
}