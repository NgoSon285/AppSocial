import {all, call, delay, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {updateExperience} from '../actions/profileAction';
import {ADD, ADD_REQUEST, SIGN_UP_REQUEST} from '../type';
import {watchSignIn, watchSignUp} from './authSaga';
import {
  watchAllProfile,
  watchCreateProfile,
  watchProfile,
  watchUpdateEducation,
  watchUpdateExperience,
  watchUpdateProfile,
} from './profileSaga';

export function* helloSaga() {
  console.log('Hello Saga!');
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    call(helloSaga),
    call(watchSignUp),
    call(watchSignIn),
    call(watchProfile),
    call(watchUpdateProfile),
    call(watchCreateProfile),
    call(watchAllProfile),
    call(watchUpdateEducation),
    call(watchUpdateExperience),
  ]);
}
