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

const Settings = {
  screen: SettingsScreen,
  path: '',
  navigationOptions: ({navigation}) => ({
    title: 'Settings',
  }),
};

const Links = {
  screen: LinksScreen,
  path: '',
  navigationOptions: ({navigation}) => ({
    title: 'Links',
  }),
};

const Forms = {
  screen: FormTest,
  path: '',
  navigationOptions: ({navigation}) => ({
    title: 'Forms',
  }),
};


const adminNavigator = createStackNavigator({
    Admin: Admin,
    Settings: Settings,
    Links: Links,
    Forms: Forms,
  }, {initialRouteName: 'Admin'},
);



export default adminNavigator;
