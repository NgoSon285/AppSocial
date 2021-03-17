import {all, call, delay, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {
  CHECK_PROFILE_SUCCESS,
  CHECK_PROFILE_REQUEST,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  CREATE_PROFILE_REQUEST,
  CREATE_PROFILE_SUCCESS,
  GET_ALL_PROFILE_REQUES,
  GET_ALL_PROFILE_SUCCESS,
  UPDATE_EDUCATION_SUCCESS,
  UPDATE_EXPERIENCE_SUCCESS,
  UPDATE_EDUCATION_REQUEST,
  UPDATE_EXPERIENCE_REQUEST,
} from '../type';
import API from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {act} from 'react-test-renderer';

export function* checkProfile() {
  try {
    let result = yield API.get('api/profile/me');
    yield put({type: CHECK_PROFILE_SUCCESS, data: result.data});
  } catch (error) {
    console.log(' error check profile ', error);
  }
}

export function* updateProfileSaga(action) {
  try {
    let result = yield API.post('api/profile', {
      status: action.status,
      company: action.company,
      website: action.website,
      location: action.location,
      skills: action.skills,
      github: action.github,
      tellUs: action.tellUs,
    });

    yield put({type: UPDATE_PROFILE_SUCCESS, data: result.data});
  } catch (error) {
    console.log('error update profile saga', error);
  }
}
export function* createProfileSaga(action) {
  try {
    let result = yield API.post('api/profile', {
      status: action.status,
      company: action.company,
      website: action.website,
      location: action.location,
      skills: action.skills,
      github: action.github,
      tellUs: action.tellUs,
      exp: action.experience,
      edu: action.education,
    });
    yield put({type: CREATE_PROFILE_SUCCESS, data: result.data});
  } catch (error) {
    console.log('error create profile saga', error);
  }
}
export function* updateEducation(action) {
  try {
    let result = yield API.post('api/profile/education', {
      school: action.school,
      degree: action.degree,
      from: action.from,
      to: action.to,
      current: action.current,
      fieldofstudy: action.fieldofstudy,
      desciption: action.desciption,
    });
    yield put({type: UPDATE_EDUCATION_SUCCESS, data: result.data});
  } catch (error) {
    console.log('error update edu');
  }
}
export function* updateExperience(action) {
  try {
    let result = yield API.put('api/profile/experience', {
      title: action.title,
      company: action.company,
      location: action.location,
      from: action.from,
      to: action.to,
      current: action.current,
      description: action.desciption,
    });

    yield put({type: UPDATE_EXPERIENCE_SUCCESS, data: result.data});
  } catch (error) {
    console.log('error update exp', error);
  }
}
export function* getAllProfilesSaga(action) {
  try {
    let result = yield API.get('api/profile');
    yield put({type: GET_ALL_PROFILE_SUCCESS, data: result.data});
  } catch (error) {
    console.log('error all profile saga', error);
  }
}
export function* watchProfile() {
  yield takeLatest(CHECK_PROFILE_REQUEST, checkProfile);
}
export function* watchUpdateProfile() {
  yield takeLatest(UPDATE_PROFILE_REQUEST, updateProfileSaga);
}
export function* watchCreateProfile() {
  yield takeLatest(CREATE_PROFILE_REQUEST, createProfileSaga);
}
export function* watchAllProfile() {
  yield takeEvery(GET_ALL_PROFILE_REQUES, getAllProfilesSaga);
}
export function* watchUpdateEducation() {
  yield takeLatest(UPDATE_EDUCATION_REQUEST, updateEducation);
}
export function* watchUpdateExperience() {
  yield takeLatest(UPDATE_EXPERIENCE_REQUEST, updateExperience);
}
