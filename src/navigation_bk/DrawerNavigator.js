import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NAVIGATION_TO_HOME_SCREEN, NAVIGATION_TO_DETAIL_SCREEN} from './routes';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName={NAVIGATION_TO_HOME_SCREEN}>
      <Drawer.Screen name="Drawer" component={StackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
