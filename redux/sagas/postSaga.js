import API from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {all, call, delay, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {
  CREATE_A_POST_REQUEST,
  CREATE_A_POST_SUCCESS,
  GET_ALL_POST_REQUEST,
  GET_ALL_POST_SUCCESS,
} from '../type';

export function* getAllPost() {
  try {
    let result = yield API.get('api/posts');
    yield put({type: GET_ALL_POST_SUCCESS, data: result.data});
  } catch (error) {
    console.log('error get all post', error);
  }
}
export function* createAPost(action) {
  try {
    let result = API.post('api/posts', {
      text: action.text,
    });
    yield put({type: CREATE_A_POST_SUCCESS, data: result.data});
  } catch (error) {
    console.log('error create post');
  }
}
export function* watchAllPost() {
  yield takeLatest(GET_ALL_POST_REQUEST, getAllPost);
}
export function* watchCreatePost() {
  yield takeLatest(CREATE_A_POST_REQUEST, createAPost);
}
