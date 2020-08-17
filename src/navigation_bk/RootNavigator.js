import React, {useContext} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {HeaderButtons} from '../common';
import {NAVIGATION_TO_HOME_SCREEN, NAVIGATION_TO_DETAIL_SCREEN} from './routes';
import {ThemeContext} from '../theme';
import {translate} from '../i18n';

const Drawer = createDrawerNavigator();

const RootNavigator = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={theme.appbar.barStyle}
        backgroundColor={theme.appbar.statusBarColor}
      />
      <Drawer.Navigator initialRouteName={NAVIGATION_TO_HOME_SCREEN}>
        <Drawer.Screen name="Drawer" component={StackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
