import {
  CHECK_PROFILE_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
  CREATE_PROFILE_SUCCESS,
  GET_ALL_PROFILE_SUCCESS,
} from '../type';

const initialState = {
  data: null,
  listProfile: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHECK_PROFILE_SUCCESS:
      return {...state, data: action.data};
    case UPDATE_PROFILE_SUCCESS:
      return {...state, data: action.data};
    case CREATE_PROFILE_SUCCESS:
      return {...state, data: action.data};
    case GET_ALL_PROFILE_SUCCESS:
      return {...state, listProfile: action.data};
    default:
      return state;
  }
};
