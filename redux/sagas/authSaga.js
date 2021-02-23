import {all, call, delay, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from '../type';
import API from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
export function* onSignUp(action) {
  try {
    let result = yield API.post('api/users', {
      name: action.name,
      email: action.email,
      password: action.password,
    });
    yield put({type: SIGN_UP_SUCCESS, data: result.data});
    yield AsyncStorage.setItem('@token', result.data.token);
    if (action.navigation) {
      action.navigation.navigate('SignIn');
    }
  } catch (error) {
    console.log('error sign up');
  }
}
export function* onSignIn(action) {
  try {
    let result = yield API.post('api/auth', {
      email: action.email,
      password: action.password,
    });
    
    yield put({type: SIGN_IN_SUCCESS, data: result.data});
    yield AsyncStorage.setItem('@token', result.data.token);
    // yield put({type: CHECK_PROFILE_REQUEST})
    console.log('token', result.data.token);
    if (action.navigation) {
      action.navigation.navigate('Home', {email: action.email});
    }
  } catch (error) {
    console.log('error sign', error);
  }
}

export function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, onSignUp);
}
export function* watchSignIn() {
  yield takeLatest(SIGN_IN_REQUEST, onSignIn);
}
