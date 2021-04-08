import {
  COMMENT_POST_SUCCESS,
  CREATE_A_POST_SUCCESS,
  DELETE_A_COMMENT_SUCCESS,
  DELETE_A_POST_SUCCESS,
  GET_ALL_POST_SUCCESS,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  UNLIKE_POST_SUCCESS,
} from '../type';

const initialState = {
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POST_SUCCESS:
      return {...state, data: action.data};
    case CREATE_A_POST_SUCCESS: {
      let stateCreate = [...state.data];
      let post = action.data;
      console.log(post);
      stateCreate.unshift(post);
      return {stateCreate, data: stateCreate};
    }
    case LIKE_POST_SUCCESS:
      let stateLikes = [...state.data];
      return {stateLikes, data: stateLikes};
    case UNLIKE_POST_SUCCESS:
      let stateUnLike = [...state.data];
      return {stateUnLike, data: stateUnLike};
    case DELETE_A_POST_SUCCESS:
      let stateDelete = [...state.data];
      return {stateDelete, data: stateDelete};
    case DELETE_A_COMMENT_SUCCESS:
      return {...state, data: action.data};
    case COMMENT_POST_SUCCESS:
      return {...state, data: action.data};
    default:
      return state;
  }
};
