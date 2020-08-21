import React, {useContext} from 'react';
import {ScrollView, StyleSheet, Image, View} from 'react-native';
import {Text} from './../common';
import {translate} from './../i18n';
import {ThemeContext} from './../theme';
import Card from '../common/Card';

const Detail = ({route, navigation}) => {
  const {id} = route.params;
  const {theme} = useContext(ThemeContext);
  const dateString = date => {
    const createdAt = new Date(date);
    return createdAt.toLocaleDateString('en-US');
  };
  return (
    <ScrollView style={styles.container(theme)}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.thumbnailStyle}
          source={{uri: id.owner.avatar_url}}
        />

        <View style={styles.typeConatiner}>
          <Text bold>user-name</Text>
          <Text type="heading"> {id.owner.login}</Text>
        </View>
      </View>
      <View style={styles.typeConatiner}>
        <Text bold>URL</Text>
        <Text type="heading">{id.html_url}</Text>
      </View>
      <View style={styles.typeConatiner}>
        <Text bold type="heading">
          {id.owner.type}
        </Text>
        <Text bold type="heading">
          {id.forks_count}
        </Text>
      </View>
      <View style={styles.typeConatiner}>
        <Text bold type="heading">
          Has wiki
        </Text>
        <Text bold type="heading">
          {id.has_wiki ? 'Yes' : 'No'}
        </Text>
      </View>
      <View style={styles.typeConatiner}>
        <Text bold type="heading">
          Forks
        </Text>
        <Text bold type="heading">
          {id.forks}
        </Text>
      </View>
      <View style={styles.typeConatiner}>
        <Text bold type="heading">
          Created At
        </Text>
        <Text bold type="heading">
          {dateString(id.created_at)}
        </Text>
      </View>
      <View style={styles.typeConatiner}>
        <Text bold type="heading">
          Watchers
        </Text>
        <Text bold type="heading">
          {id.watchers}
        </Text>
      </View>
      <View style={styles.typeConatiner}>
        <Text bold type="heading">
          Open Issue
        </Text>
        <Text bold type="heading">
          {id.open_issues}
        </Text>
      </View>
      {/* <Text bold>{JSON.stringify(id)}</Text> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: theme => ({
    backgroundColor: theme.backgroundColor,
  }),

  typeConatiner: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatarContainer: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnailStyle: {
    height: 150,
    width: 150,
  },
});

Detail.propTypes = {};

Detail.defaultProps = {};

export default Detail;
