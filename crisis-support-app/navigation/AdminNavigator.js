import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { AdminScreen, AdminPin } from '_screens';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const Admin = {
  screen: AdminScreen,
  path: '',
  navigationOptions: ({navigation}) => ({
    title: 'Admin'
  }),
};

const Pin = {
  screen: AdminPin,
  path: '',
  navigationOptions: ({navigation}) => ({
    title: 'AdminPin'
  }),
};

const adminNavigator = createStackNavigator({
  Pin: Pin,  
  Admin: Admin,
  }, {initialRouteName: 'Pin'},
);

export default adminNavigator;
