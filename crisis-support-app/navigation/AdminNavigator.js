import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import SettingsScreen from '../screens/SettingsScreen';
import AdminScreen from '../screens/AdminScreen';
import LinksScreen from '../screens/LinksScreen';
import FormTest from '../screens/FormTest';


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

const adminNavigator = createStackNavigator({
    Admin: Admin,
  }, {initialRouteName: 'Admin'},
);

export default adminNavigator;
