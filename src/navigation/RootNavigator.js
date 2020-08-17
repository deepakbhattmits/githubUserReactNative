import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import DrawerNavigator from './DrawerNavigator';
import {ThemeContext} from '../theme';
const RootNavigator = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={theme.appbar.barStyle}
        backgroundColor={theme.appbar.statusBarColor}
      />
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
