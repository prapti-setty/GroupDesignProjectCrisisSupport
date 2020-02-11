import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});


const mainNavigator = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    path: '',
    navigationOptions: ({navigation}) => ({
      title: 'Settings'
    }),
  },
  {
    initialRouteName: 'Settings',
  },
});


export default mainNavigator;
