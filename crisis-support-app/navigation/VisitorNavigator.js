import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import SettingsScreen from '../screens/SettingsScreen';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import FormTest from '../screens/FormTest';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const Home = {
  screen: HomeScreen,
  path: '',
  navigationOptions: ({navigation}) => ({
    title: 'Home'
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
    Home: Home,
    Settings: Settings,
    Links: Links,
    Forms: Forms,
  }, {initialRouteName: 'Home'},
);



export default visitorNavigator;
