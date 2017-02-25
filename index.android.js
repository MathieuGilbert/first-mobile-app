import React, { Component } from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  NavigationExperimental
} from 'react-native'

import Welcome from './scenes/welcome'
import Boxes from './scenes/boxes'
import Horizontal from './scenes/horizontal'
import Vertical from './scenes/vertical'
import Pizzalator from './scenes/pizzalator'
import Names from './scenes/names'

const styles = require('./styles');

// destructure some components
const {
 CardStack: NavigationCardStack,
 StateUtils: NavigationStateUtils
} = NavigationExperimental

// reducer to determine how state changes in response to actions
function createReducer(initialState) {
  return (currentState = initialState, action) => {
    switch (action.type) {
      case 'push':
        return NavigationStateUtils.push(currentState, { key: action.key });
      case 'pop':
        return currentState.index > 0 ? NavigationStateUtils.pop(currentState) : currentState;
      default:
        return currentState;
    }
  }
}

const NavReducer = createReducer({
  index: 0,
  key: 'App',
  routes: [{key: 'Welcome'}]
})

// main component
class HelloWorldApp extends Component {
  constructor(props) {
    super(props)
    this.state = { navState: NavReducer(undefined, {}) }
  }

  _handleAction (action) {
    const newState = NavReducer(this.state.navState, action);

    if (newState === this.state.navState) {
      return false;
    }
    this.setState({ navState: newState })
    return true;
  }

  handleBackAction() {
    return this._handleAction({ type: 'pop' });
  }

  _renderRoute (key) {
    return (
      <View>
        <Text style={styles.bigblue}>Super App</Text>
        {this._sceneComponent(key)}
      </View>
    );
  }

  _sceneComponent (key) {
    switch (key) {
      case 'Welcome':
        return (
          <Welcome onPress={this._handleAction.bind(this, { type: 'push', key: 'Boxes' })} styles={styles} />
        );
      case 'Boxes':
        return (
          <Boxes
            goBack={this.handleBackAction.bind(this)}
            onPress={this._handleAction.bind(this, { type: 'push', key: 'Horizontal' })}
            styles={styles} />
        );
      case 'Horizontal':
        return (
          <Horizontal
            goBack={this.handleBackAction.bind(this)}
            onPress={this._handleAction.bind(this, { type: 'push', key: 'Vertical' })}
            styles={styles} />
          );
      case 'Vertical':
        return (
          <Vertical
            goBack={this.handleBackAction.bind(this)}
            onPress={this._handleAction.bind(this, { type: 'push', key: 'Pizzalator' })}
            styles={styles} />
        );
      case 'Pizzalator':
        return (
          <Pizzalator
            goBack={this.handleBackAction.bind(this)}
            onPress={this._handleAction.bind(this, { type: 'push', key: 'Names' })}
            styles={styles} />
        );
      case 'Names':
        return (
          <Names goBack={ this.handleBackAction.bind(this)} styles={styles} />
        );
    }
  }

  _renderScene(props) {
    const ComponentToRender = this._renderRoute(props.scene.route.key)
    return (
      <ScrollView style={styles.scrollView}>
        {ComponentToRender}
      </ScrollView>
    );
  }

  render() {
    return (
      <NavigationCardStack
        navigationState={this.state.navState}
        onNavigate={this._handleAction.bind(this)}
        renderScene={this._renderScene.bind(this)} />
    )
  }
}

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
