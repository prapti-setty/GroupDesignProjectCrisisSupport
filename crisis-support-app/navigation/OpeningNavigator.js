import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { OpeningScreen, AdminPin, VisitorScreen } from '_screens';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const Opening = {
  screen: OpeningScreen,
  path: '',
  navigationOptions: ({navigation}) => ({
    title: 'Opening'
  }),
};

const Admin = {
  screen: AdminPin,
  path: '',
  navigationOptions: ({navigation}) => ({
    title: 'Trocaire Staff & Partners'
  }),
};

const Visitor = {
  screen: VisitorScreen,
  path: '',
  navigationOptions: ({navigation}) => ({
    title: 'Community Help and Feedback'
  }),
};

const openingNavigator = createStackNavigator({
  Opening: Opening,
}, {initialRouteName: 'Opening'},
);

export default openingNavigator;
