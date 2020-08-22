import React, {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Switch,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
  CheckBox,
} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getTrendingRepo} from './../store/actions';
import {Text, Button} from './../common';
import {Status} from './../api';
import {translate} from './../i18n';
import {ThemeContext, lightTheme, darkTheme} from './../theme';
import {CardSection} from '../common/CardSection';

const Home = ({
  /**
   * Tells about the status of get trendending repo api call
   *
   * if status === Status.DEFAULT => api hasn't been hit yet
   * if status === Status.LOADING => api is currently being executed
   * if status === Status.SUCCESS => success response from api
   * if status === Status.ERROR   => error response from api
   *
   * @source: redux
   */
  status,
  /**
   * Contains the error message from server, when status === Status.ERROR
   *
   * @source: redux
   */
  errorMessage,
  /**
   * Array, which store trendeing repository data
   *
   * @source: redux
   */
  items,
  /**
   * redux action to initiate get trending repo api request
   *
   * @source: redux
   */
  getTrendingRepo: _getTrendingRepo,
  /**
   * @source react-navigation
   */
  navigation,
  routes,
}) => {
  const [isDarkTheme, toggleDarkTheme] = useState(false);

  const [isFav, setIsFav] = useState([]);
  const {theme, setTheme} = useContext(ThemeContext);

  useEffect(() => {
    // componentDidMount
    _getTrendingRepo();
  }, []);

  const toggleSwitch = state => {
    // If switch is on, set dark theme, else light
    toggleDarkTheme(state);
    setTheme(state ? darkTheme : lightTheme);
  };
  const toggleFav = value => {
    let selectedUsers = [];
    const selectedUser = items.filter(el => {
      return el.id === value;
    });
    if (isFav.includes(selectedUser[0].id)) {
      let toggleUser = isFav.filter(el => el !== selectedUser[0].id);
      setIsFav(toggleUser);
    } else {
      selectedUsers = Array.from(new Set([...isFav, selectedUser[0].id]));
      setIsFav(selectedUsers);
    }
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      key={item.id}
      onPress={() => {
        navigation.navigate('Detail', {id: item, name: item.owner.login});
      }}>
      <CardSection style={styles.listItem(theme)}>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{uri: item.owner.avatar_url}}
          />
          <Text>{`${isFav.includes(item.id) ? `fav` : `Unfav`}`}</Text>
          <Switch
            onValueChange={() => {
              toggleFav(item.id);
            }}
            value={isFav.includes(item.id)}
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text bold type="heading" style={styles.headerTextStyle}>
            {item.forks_url}
          </Text>
          <Text>{item.full_name}</Text>
        </View>
      </CardSection>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container(theme)}>
      <View>
        <Switch onValueChange={toggleSwitch} value={isDarkTheme} />
      </View>
      <View>
        {/* <SafeAreaView style={styles.container}> */}
        <FlatList
          style={styles.flatList}
          data={items}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
        {/* </SafeAreaView> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: theme => ({
    flex: 1,
    backgroundColor: theme.backgroundColor,
  }),

  listItem: theme => ({
    color: 'yellow',
    backgroundColor: theme.backgroundColor,
    paddingVertical: 10,
  }),
  flatList: {
    paddingRight: 10,
  },
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
});

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
  getTrendingRepo: PropTypes.func.isRequired,
  status: PropTypes.oneOf(Object.values(Status)).isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  errorMessage: PropTypes.string,
};

Home.defaultProps = {
  items: [],
  errorMessage: '',
};

const mapStateToProps = ({home}) => {
  const {status, errorMessage, items} = home;
  return {
    items,
    status,
    errorMessage,
  };
};

export default connect(
  mapStateToProps,
  {getTrendingRepo},
)(Home);
