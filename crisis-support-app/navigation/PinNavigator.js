import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import AdminPin from '../screens/AdminPin';
import AdminScreen from '../screens/AdminScreen';


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

const pinNavigator = createStackNavigator({
  Pin: Pin,
}, {initialRouteName: 'Pin'},
);

export default pinNavigator;
