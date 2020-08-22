import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HeaderButtons} from '../common';
import Home from '../screens/Home';
import Favorites from '../screens/Favorites';
import Detail from '../screens/Detail';

import {translate} from '../i18n';

const Stack = createStackNavigator();
import {ThemeContext} from '../theme';
const MainStackNavigator = () => {
  const {theme} = useContext(ThemeContext);
  const screenOptionStyle = ({navigation}) => ({
    headerStyle: {
      backgroundColor: theme.primaryColor,
    },
    headerBackTitle: null,
    headerTintColor: theme.appbar.tintColor,
  });
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="GitHub Users"
        options={({navigation}) => ({
          // title: translate('home.appbarTitle'),
          headerLeft: () => (
            <HeaderButtons>
              <HeaderButtons.Item
                // title={translate('common.drawerButton')}
                iconName="menu"
                onPress={navigation.openDrawer}
              />
            </HeaderButtons>
          ),
        })}
        component={Home}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({route}) => ({title: route.params.name})}
      />
    </Stack.Navigator>
  );
};

const FavoritesStackNavigator = () => {
  const {theme} = useContext(ThemeContext);
  const screenOptionStyle = ({navigation}) => ({
    headerStyle: {
      backgroundColor: theme.primaryColor,
    },
    headerBackTitle: null,
    headerTintColor: theme.appbar.tintColor,
  });
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Favorites"
        options={({navigation}) => ({
          // title: translate('home.appbarTitle'),
          headerLeft: () => (
            <HeaderButtons>
              <HeaderButtons.Item
                iconName="arrow-back"
                onPress={navigation.goBack}
              />
            </HeaderButtons>
          ),
        })}
        component={Favorites}
      />
    </Stack.Navigator>
  );
};

export {MainStackNavigator, FavoritesStackNavigator};
