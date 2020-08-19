import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {MainStackNavigator, FavoritesStackNavigator} from './StackNavigator';

import {ThemeContext} from '../theme';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const {theme} = useContext(ThemeContext);
  const screenOptionStyle = {
    activeTintColor: theme.primaryColor,
    labelStyle: {
      fontSize: 15,
      margin: 0,
      padding: 0,
    },
    // activeBackgroundColor: theme.appbar.tintColor,
    // inactiveBackgroundColor: theme.appbar.statusBarColor,
  };
  return (
    <Tab.Navigator tabBarOptions={screenOptionStyle}>
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Icon name="ios-home" color={theme.primaryColor} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStackNavigator}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: () => (
            <Icon name="ios-star" color={theme.primaryColor} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
