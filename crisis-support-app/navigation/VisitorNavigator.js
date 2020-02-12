import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import SettingsScreen from '../screens/SettingsScreen';
import VisitorScreen from '../screens/VisitorScreen';
import LinksScreen from '../screens/LinksScreen';
import FormTest from '../screens/FormTest';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const Visitor = {
  screen: VisitorScreen,
  path: '',
  navigationOptions: ({navigation}) => ({
    title: 'Visitor'
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


const visitorNavigator = createStackNavigator({
    Visitor: Visitor,
    Settings: Settings,
    Links: Links,
    Forms: Forms,
  }, {initialRouteName: 'Visitor'},
);



export default visitorNavigator;
