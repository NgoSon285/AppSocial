/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider} from 'react-redux';
import store from './redux/store';
import AppNavigation from './navigation/appNavigation';

const App = () => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <Provider store={store}>
      <AppNavigation />
      {/* <EditProfile /> */}
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
