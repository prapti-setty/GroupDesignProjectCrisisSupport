import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { AdminScreen, AdminPin , SettingsScreen , LinksScreen, FormTest, ManualScreen} from '_screens';
import Colors from '../constants/Colors'

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
    title:'Kiosk Guidebook'
  }),
};

const Forms = {
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
  Forms: Forms,
},
  {
      initialRouteName: 'Pin',
      defaultNavigationOptions: {
          headerStyle: {
              backgroundColor: Colors.trocaireBlue,
              elevation: 5,
              shadowOpacity: 5
          },
          headerTintColor: 'white',
          headerTitleStyle: {
              textAlign: 'center',
              flexGrow: 1,
              fontSize:24,
              fontWeight: 'bold',
              color: 'white',
          },
          headerTitleContainerStyle: {
            left: 0,
          },
      }
  },
);

export default adminNavigator;
