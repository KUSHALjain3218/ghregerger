import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import db from './config';
import HomeScreen from './screens/HomeScreen';
import BuzzerScreen from './screens/BuzzerScreen';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      like: 0,
      dislike: 0,
    };
  }
  render() {
    return (
      <View>
        <AppContainer />
      
      </View>
    );
  }
  
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  BuzzerScreen: BuzzerScreen,
});

const AppContainer = createAppContainer(AppNavigator);
