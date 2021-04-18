import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider} from 'react-redux';
import store from './redux/store';
import AppNavigation from './navigation/appNavigation';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  if (__DEV__) {
    import('./ReactotronConfig').then(() =>
      console.log('Reactotron Configured'),
    );
  }
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
