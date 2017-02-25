import React, { Component } from 'react';
import { View, Text } from 'react-native';
import InputText from '../inputText';

const Button = require('../button');

const Pizzalator = ({ onPress, goBack, styles }) => (
  <View style={styles.container}>
    <InputText/>

    <Button onPress={onPress} title='Go To Next Scene' />
    <Button onPress={goBack} title='Go Back' />
  </View>
)

module.exports = Pizzalator;
