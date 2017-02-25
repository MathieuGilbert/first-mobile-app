import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Bananas from '../bananas';
import Greeting from '../greeting';

const Button = require('../button');

const Horizontal = ({ onPress, goBack, styles }) => (
  <View style={styles.container}>
    <Text>Flex Horizontal</Text>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: 100 }}>
      <View style={{ width: 50, height: 50, backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center' }}>
        <Text>one</Text>
      </View>
      <View style={{ width: 50, height: 50, backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center' }}>
        <Text>two</Text>
      </View>
      <View style={{ width: 50, height: 50, backgroundColor: 'steelblue', alignItems: 'center', justifyContent: 'center' }}>
        <Text>three</Text>
      </View>
    </View>

    <Button onPress={onPress} title='Go To Next Scene' />
    <Button onPress={goBack} title='Go Back' />
  </View>
)

module.exports = Horizontal;




