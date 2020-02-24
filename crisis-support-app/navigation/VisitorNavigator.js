import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { SettingsScreen, VisitorScreen, LinksScreen, FormTest } from '_screens';


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
