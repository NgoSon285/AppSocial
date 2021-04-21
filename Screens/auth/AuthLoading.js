//import liraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

// create a component
const AuthLoading = ({navigation}) => {
  useEffect(() => {
    checkToken();
  }, []);
  const checkToken = async () => {
    try {
      const tokenAsync = await AsyncStorage.getItem('@token');
      if (tokenAsync) {
        navigation.navigate('Home');
        return;
      }
      navigation.navigate('SignIn');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'green'} />
    </View>
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
export default AuthLoading;
