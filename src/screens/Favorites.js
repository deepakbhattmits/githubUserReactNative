import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ThemeContext} from '../theme';
const Favorites = () => {
  const theme = useContext(ThemeContext);
  return (
    <View style={styles.center(theme)}>
      <Text>This is the Favorites screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: theme => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: theme.backgroundColor,
  }),
});

export default Favorites;
