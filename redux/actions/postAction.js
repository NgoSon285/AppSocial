import {
  CREATE_A_POST_REQUEST,
  GET_ALL_POST_REQUEST,
  LIKE_POST_REQUEST,
  DELETE_A_POST_REQUEST,
  UNLIKE_POST_REQUEST,
  DELETE_A_COMMENT_REQUEST,
  COMMENT_POST_REQUEST,
} from '../type';

export const getAllPost = () => ({
  type: GET_ALL_POST_REQUEST,
});
export const createPost = (text) => ({
  type: CREATE_A_POST_REQUEST,
  text,
});
export const likePost = (id) => ({
  type: LIKE_POST_REQUEST,
  id,
});
export const unLikePost = (id) => ({
  type: UNLIKE_POST_REQUEST,
  id,
});
export const deletePost = (id) => ({
  type: DELETE_A_POST_REQUEST,
  id,
});
export const deleteComment = (id,comment_id) => ({
  type: DELETE_A_COMMENT_REQUEST,
  id,
  comment_id,
});
export const createComment = (id, text) => ({
  type: COMMENT_POST_REQUEST,
  id,
  text,
});
