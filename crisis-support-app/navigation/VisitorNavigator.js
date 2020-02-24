import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { SettingsScreen, VisitorScreen, LinksScreen, FormTest } from '_screens';
import { ComplaintFormScreen } from '_visitorScreens';


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

const ComplaintForm = {
  screen: ComplaintFormScreen,
  path: '',
  navigationOptions: ({navigation}) => ({
    title: 'ComplaintForm'
  }),
};

const visitorNavigator = createStackNavigator({
    Visitor: Visitor,
    ComplaintForm: ComplaintForm,
  }, {initialRouteName: 'Visitor'},
);



export default visitorNavigator;
