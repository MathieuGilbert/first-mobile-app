import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Bananas from '../bananas';
import Greeting from '../greeting';

const Button = require('../button');

const Boxes = ({ onPress, goBack, styles }) => (
  <View style={styles.container}>
    <Text>Small</Text>
    <View style={styles.smallBox}></View>

    <Text>Medium</Text>
    <View style={styles.mediumBox}></View>

    <Text>Large</Text>
    <View style={styles.largeBox}>
      <View style={{ flex: 1, backgroundColor: 'pink', margin: 10 }}>
        <Text>flex 1</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: 'orange', margin: 10 }}>
        <Text>flex 1</Text>
      </View>
      <View style={{ flex: 2, backgroundColor: 'red', margin: 10 }}>
        <Text>flex 2</Text>
      </View>
    </View>

    <Button onPress={onPress} title='Go To Next Scene' />
    <Button onPress={goBack} title='Go Back' />
  </View>
)

module.exports = Boxes;
