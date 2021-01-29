import {all, call, delay, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {
  CHECK_PROFILE_SUCCESS,
  CHECK_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
} from '../type';
import API from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function* checkProfile(action) {
  try {
    let result = yield API.get('api/profile/me');
    yield put({type: CHECK_PROFILE_SUCCESS, data: result.data});
    let log = AsyncStorage.getItem('@token');
    console.log(log);
  } catch (error) {
    console.log(' error profile m', error);
  }
}
export function* updateProfileSaga(action) {
  try {
    let result = yield API.post('/api/profile', {
      levels: action.levels,
      company: action.company,
      website: action.website,
      location: action.location,
      skills: action.skills,
      githubName: action.githubName,
      tellUs: action.tellUs,
      twitter: action.twitter,
      facebook: action.facebook,
      youtube: action.youtube,
      linkedIn: action.linkedIn,
      instagram: action.instagram,
    });
    yield put({type: UPDATE_PROFILE_SUCCESS, data: result.data});
    yield AsyncStorage.setItem('@token', result.data.token);
  } catch (error) {
    console.log(error);
  }
}
export function* watchProfile() {
  yield takeLatest(CHECK_PROFILE_REQUEST, checkProfile);
}
export function* watchUpdateProfile() {
  yield takeLatest(CHECK_PROFILE_REQUEST, updateProfileSaga);
}
