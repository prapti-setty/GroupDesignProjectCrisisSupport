import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { SettingsScreen, VisitorScreen, LinksScreen, FormTest,ManualScreen } from '_screens';
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
    ComplaintForm: ComplaintForm,
    Links: Links,
    Settings: Settings,
    Manual: Manual,
    Form: Form,
  }, {initialRouteName: 'Visitor'},
);



export default visitorNavigator;
