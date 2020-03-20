import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { AdminPin, AdminScreen, OpeningScreen } from '_screens';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const Pin = {
  screen: AdminPin,
  path: '',
  navigationOptions: ({navigation}) => ({
    title: 'AdminPin'
  }),
};

const Admin = {
  screen: AdminScreen,
  path: '',
  navigationOptions: ({navigation}) => ({
    title: 'PinEntry'
  }),
};

const Opening = {
  screen: OpeningScreen,
  path:'',
  navigationOptions:({navigation}) => ({
    title:'Opening'
  }),
};

const pinNavigator = createStackNavigator({
  Pin: Pin,
  Opening: Opening,
}, {initialRouteName: 'Pin'},
);

export default pinNavigator;
