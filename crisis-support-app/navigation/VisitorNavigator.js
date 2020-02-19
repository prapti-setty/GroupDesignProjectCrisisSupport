import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import SettingsScreen from '../screens/SettingsScreen';
import VisitorScreen from '../screens/VisitorScreen';
import LinksScreen from '../screens/LinksScreen';
import FormTest from '../screens/FormTest';
import ManualScreen from '../screens/ManualScreen';

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



const visitorNavigator = createStackNavigator({
    Visitor: Visitor,
  }, {initialRouteName: 'Visitor'},
);



export default visitorNavigator;
