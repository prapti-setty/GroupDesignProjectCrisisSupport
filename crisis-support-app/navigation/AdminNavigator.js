import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import SettingsScreen from '../screens/SettingsScreen';
import AdminScreen from '../screens/AdminScreen';
import LinksScreen from '../screens/LinksScreen';
import FormTest from '../screens/FormTest';
import ManualScreen from '../screens/ManualScreen';

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

const Links = {
  screen:LinksScreen,
  path:'',
  navigationOptions:({navigation}) => ({
    title:'Links'
  }),
};

const Settings = {
  screen:SettingsScreen,
  path:'',
  navigationOptions:({navigation}) => ({
    title:'Settings'
  }),
};

const Manual = {
  screen:ManualScreen,
  path:'',
  navigationOptions:({navigation}) => ({
    title:'Manual'
  }),
};

const Form = {
  screen:FormTest,
  path:'',
  navigationOptions:({navigation}) => ({
    title:'Form'
  }),
};

const adminNavigator = createStackNavigator({
    Admin: Admin,
    Links: Links,
    Settings: Settings,
    Manual: Manual,
    Form: Form,
  }, {initialRouteName: 'Admin'},
);

export default adminNavigator;
