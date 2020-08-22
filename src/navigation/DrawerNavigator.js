import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
// import Favorites from '../screens/Favorites';
import {MainStackNavigator, FavoritesStackNavigator} from './StackNavigator';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Favorite" component={FavoritesStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
