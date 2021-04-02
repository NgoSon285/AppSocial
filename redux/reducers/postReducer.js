import {
  COMMENT_POST_SUCCESS,
  CREATE_A_POST_SUCCESS,
  DELETE_A_COMMENT_SUCCESS,
  DELETE_A_POST_SUCCESS,
  GET_ALL_POST_SUCCESS,
  LIKE_POST_SUCCESS,
  UNLIKE_POST_SUCCESS,
} from '../type';

const initialState = {
  data: null,
  profile: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POST_SUCCESS:
      return {...state, data: action.data};
    case CREATE_A_POST_SUCCESS:
      return {...state, data: action.data};
    case LIKE_POST_SUCCESS:
      return {...state, data: action.data};
    case UNLIKE_POST_SUCCESS:
      return {...state, data: action.data};
    case DELETE_A_POST_SUCCESS:
      return {...state, data: action.data};
    case DELETE_A_COMMENT_SUCCESS:
      return {...state, data: action.data};
    case COMMENT_POST_SUCCESS:
      return {...state, data: action.data};
    default:
      return state;
  }
};
