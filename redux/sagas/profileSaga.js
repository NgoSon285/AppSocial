import {all, call, delay, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {
  CHECK_PROFILE_SUCCESS,
  CHECK_PROFILE_REQUEST,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
} from '../type';
import API from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function* checkProfile(action) {
  try {
    let result = yield API.get('api/profile/me');
    yield put({type: CHECK_PROFILE_SUCCESS, data: result.data});
  } catch (error) {
    console.log(' error check profile ', error);
  }
}
export function* updateProfileSaga(action) {
  try {
    let result = yield API.post('/api/profile', {
      status:action.status,
      company:action.company,
      website:action.website,
      location:action.location,
      skills:action.skills,
      github:action.github,
      tellUs:action.tellUs,
      
    });
    console.log('A');
    yield put({type: UPDATE_PROFILE_SUCCESS, data: result.data});
  } catch (error) {
    console.log('error update profile saga', error);
  }
}
export function* watchProfile() {
  yield takeLatest(CHECK_PROFILE_REQUEST, checkProfile);
}
export function* watchUpdateProfile() {
  yield takeLatest(UPDATE_PROFILE_REQUEST, updateProfileSaga);
}
