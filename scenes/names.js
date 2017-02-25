import React, { Component } from 'react';
import { View } from 'react-native';
import NameList from '../nameList';

const Button = require('../button');

const Names = ({ onPress, goBack, styles }) => (
  <View style={styles.container}>
    <NameList/>

    <Button onPress={goBack} title='Go Back' />
  </View>
)

module.exports = Names;
