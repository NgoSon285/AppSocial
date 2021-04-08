import API from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {all, call, delay, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {
  COMMENT_POST_REQUEST,
  COMMENT_POST_SUCCESS,
  CREATE_A_POST_REQUEST,
  CREATE_A_POST_SUCCESS,
  DELETE_A_COMMENT_REQUEST,
  DELETE_A_COMMENT_SUCCESS,
  DELETE_A_POST_REQUEST,
  DELETE_A_POST_SUCCESS,
  GET_ALL_POST_REQUEST,
  GET_ALL_POST_SUCCESS,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  UNLIKE_POST_REQUEST,
  UNLIKE_POST_SUCCESS,
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
    let result = yield API.post('api/posts', {
      text: action.text,
    });
    yield put({type: CREATE_A_POST_SUCCESS, data: result.data});
  } catch (error) {
    console.log('error create post');
  }
}
export function* likePostSaga(action) {
  try {
    let result = yield API.put(`api/posts/like/${action.id}`);
    yield put({type: LIKE_POST_SUCCESS, data: result.data});
  } catch (error) {
    console.log(error);
  }
}
export function* unLikePostSaga(action) {
  try {
    let result = yield API.put(`api/posts/unlike/${action.id}`);
    yield put({type: UNLIKE_POST_SUCCESS, data: result.data});
  } catch (error) {
    console.log(error);
  }
}
export function* deletePostSaga(action) {
  try {
    let result = yield API.delete(`api/posts/${action.id}`);
    yield put({type: DELETE_A_POST_SUCCESS, data: result.data});
  } catch (error) {
    console.log(error);
  }
}
export function* deleteCommentSaga(action) {
  try {
    let result = yield API.delete(
      `api/posts/comment/${action.id}/${action.comment_id})`,
    );
    yield put({type: DELETE_A_COMMENT_SUCCESS, data: result.data});
  } catch (error) {
    console.log('error delete comment', error);
  }
}
export function* createCommentSaga(action) {
  try {
    let result = yield API.post(`api/posts/comment/${action.id}`, {
      text: action.text,
    });
    yield put({type: COMMENT_POST_SUCCESS, data: result.data});
  } catch (error) {
    console.log('error create comments', error);
  }
}
export function* watchAllPost() {
  yield takeLatest(GET_ALL_POST_REQUEST, getAllPost);
}
export function* watchCreatePost() {
  yield takeLatest(CREATE_A_POST_REQUEST, createAPost);
}
export function* watchLikePost() {
  yield takeLatest(LIKE_POST_REQUEST, likePostSaga);
}
export function* watchDeletePost() {
  yield takeLatest(DELETE_A_POST_REQUEST, deletePostSaga);
}
export function* watchUnLikePost() {
  yield takeLatest(UNLIKE_POST_REQUEST, unLikePostSaga);
}
export function* watchDeleteComment() {
  yield takeLatest(DELETE_A_COMMENT_REQUEST, deleteCommentSaga);
}
export function* watchCreateComment() {
  yield takeLatest(COMMENT_POST_REQUEST, createCommentSaga);
}
