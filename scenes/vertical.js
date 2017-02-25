import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Bananas from '../bananas';
import Greeting from '../greeting';

const Button = require('../button');

const Vertical = ({ onPress, goBack, styles }) => (
  <View style={styles.container}>
    <Text>Flex Vertical</Text>
    <View style={{
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
    }}>
      <View style={{height: 50, backgroundColor: 'darkseagreen'}} />
      <View style={{height: 50, backgroundColor: 'forestgreen'}} />
      <View style={{height: 50, backgroundColor: 'green'}} />
    </View>

    <Button onPress={onPress} title='Go To Next Scene' />
    <Button onPress={goBack} title='Go Back' />
  </View>
)

module.exports = Vertical;
