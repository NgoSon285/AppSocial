//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AuthLoading from '../Screens/auth/AuthLoading';
import SignIn from '../Screens/auth/SignIn';
import SignUp from '../Screens/auth/SignUp';
import Home from '../Screens/home/Home';
import CreateProfile from '../Screens/profile/CreateProfile';
import EditProfile from '../Screens/profile/EditProfile';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddExperience from '../Screens/profile/AddExperience';
import AddEducation from '../Screens/profile/AddEducation';
import ProfileDetail from '../Screens/profile/ProfileDetail';
import postDetail from '../Screens/post/postDetail';
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
        <Stack.Screen name="CreateProfile" component={CreateProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="AddExperience" component={AddExperience} />
        <Stack.Screen name="AddEducation" component={AddEducation} />
        <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
        <Stack.Screen name="postDetail" component={postDetail} />
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
