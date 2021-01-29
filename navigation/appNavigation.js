//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AuthLoading from '../Screens/auth/AuthLoading';
import SignIn from '../Screens/auth/SignIn';
import SignUp from '../Screens/auth/SignUp';
import Home from '../Screens/home/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import EditProfile from '../Screens/profile/EditProfile';
const Stack = createStackNavigator();
// create a component
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AuthLoading" component={AuthLoading} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default AppNavigation;
