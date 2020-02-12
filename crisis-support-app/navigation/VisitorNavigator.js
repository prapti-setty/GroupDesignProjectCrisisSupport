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

const visitorNavigator = createStackNavigator({
    Visitor: Visitor,
  }, {initialRouteName: 'Visitor'},
);



export default visitorNavigator;
