//import liraries
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ProfileAction from '../../redux/actions/profileAction';
import Profile from '../profile/Profile';
import DevelopeScreen from '../profile/DevelopeScreen';
import ListPost from '../post/ListPost';
import {Icon} from 'native-base';
const Tab = createBottomTabNavigator();
const Home = ({profile}) => {
  useEffect(() => {
    CheckProfile();
  }, []);
  const CheckProfile = () => {
    profile.checkProfile();
  };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'DevelopeScreen') {
            iconName = focused ? 'user-friends' : 'user-friends';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'bars' : 'bars';
          } else if (route.name === 'ListPost') {
            iconName = focused ? 'list-alt' : 'list-alt';
          }

          // You can return any component that you like here!
          return (
            <Icon
              name={iconName}
              type={'FontAwesome5'}
              color={color}
              fontSize={10}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="DevelopeScreen" component={DevelopeScreen} />

      <Tab.Screen name="ListPost" component={ListPost} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  profile: bindActionCreators(ProfileAction, dispatch),
});
//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(Home);
