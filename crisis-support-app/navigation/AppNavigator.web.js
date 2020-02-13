import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import VisitorNavigator from './VisitorNavigator';
import AdminNavigator from './AdminNavigator';
import OpeningNavigator from './OpeningNavigator';
import pinNavigator from "./PinNavigator";


const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  // MainTab: MainTabNavigator,
  Opening: OpeningNavigator,
  Visitor: VisitorNavigator,
  Admin: AdminNavigator,
  AdminPin: pinNavigator,
},
{
  initialRouteName: 'Opening',
},);
switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { history: 'hash' });
