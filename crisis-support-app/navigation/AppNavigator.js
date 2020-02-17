import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import VisitorNavigator from './VisitorNavigator';
import AdminNavigator from './AdminNavigator';
import OpeningNavigator from './OpeningNavigator';
import PinNavigator from "./PinNavigator";

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    // MainTab: MainTabNavigator,
    Opening: OpeningNavigator,
    Visitor: VisitorNavigator,
    Admin: AdminNavigator,
    AdminPin: PinNavigator,
  },
  {
    initialRouteName: 'Opening',
  },
)
);
