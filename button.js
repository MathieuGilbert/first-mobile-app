import React, { Component } from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

const Button = ({title, onPress}) => (
  <TouchableHighlight underlayColor='#EFEFEF' onPress={onPress} style={styles.button}>
    <Text>{title}</Text>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  button: {
    height: 70,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#EDEDED'
  }
});

module.exports = Button;
