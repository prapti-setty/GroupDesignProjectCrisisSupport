import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import MainNavigator from './MainNavigator';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    MainTab: MainTabNavigator,
    Main: MainNavigator,
  },
  {
    initialRouteName: Main,
  },
)
);
