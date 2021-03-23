import {CREATE_A_POST_REQUEST, GET_ALL_POST_REQUEST} from '../type';

export const getAllPost = () => ({
  type: GET_ALL_POST_REQUEST,
});
export const createPost = (text) => ({
  type: CREATE_A_POST_REQUEST,
  text,
});
