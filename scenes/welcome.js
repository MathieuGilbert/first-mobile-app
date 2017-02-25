import React, { Component } from 'react';
import { View } from 'react-native';
import Bananas from '../bananas';
import Greeting from '../greeting';

const Button = require('../button');

const Welcome = ({ onPress, styles }) => (
  <View style={styles.container}>
    <Greeting text="Hello, Sir Waffle" style={styles.red} />
    <Bananas />
    <Button onPress={onPress} title='Go To Next Scene' styles={styles} />
  </View>
)

module.exports = Welcome;
