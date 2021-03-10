//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Profile from '../profile/Profile';
const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator>
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

//make this component available to the app
export default Home;
