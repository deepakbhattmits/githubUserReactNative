
import Recact from 'react'l
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen, DetailScreen} from '../screens';
const Stack = createStackNavigator();
const StackNavigator = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: theme.primaryColor,
        },
        headerBackTitle: null,
        headerTintColor: theme.appbar.tintColor,
      })}>
      <Stack.Screen
        name={NAVIGATION_TO_HOME_SCREEN}
        component={HomeScreen}
        options={({navigation}) => ({
          title: translate('homeScreen.appbarTitle'),
          headerLeft: () => (
            <HeaderButtons>
              <HeaderButtons.Item
                title={translate('common.drawerButton')}
                iconName="menu"
                onPress={navigation.openDrawer}
              />
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen
        name={NAVIGATION_TO_DETAIL_SCREEN}
        component={DetailScreen}
        options={({route}) => ({
          title: translate('detailScreen.appbarTitle'),
        })}
      />
    </Stack.Navigator>
  );
};
export default StackNavigator;
