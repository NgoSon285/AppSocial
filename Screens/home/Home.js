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

const Tab = createBottomTabNavigator();
const Home = ({profile}) => {
  useEffect(() => {
    CheckProfile();
  }, []);
  const CheckProfile = () => {
    profile.checkProfile();
  };
  return (
    <Tab.Navigator>
      
      <Tab.Screen name="DevelopeScreen" component={DevelopeScreen} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="ListPost" component={ListPost} />
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
