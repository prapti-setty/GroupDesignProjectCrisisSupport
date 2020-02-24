import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { AdminScreen, AdminPin , SettingsScreen , LinksScreen, FormTest, ManualScreen} from '_screens';

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
  Pin: Pin,
  Admin: Admin,
  Links: Links,
  Settings: Settings,
  Manual: Manual,
  Form: Form,
  }, {initialRouteName: 'Pin'},
);

export default adminNavigator;
