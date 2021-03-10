import {
  CHECK_PROFILE_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
  CREATE_PROFILE_SUCCESS,
} from '../type';

const initialState = {
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHECK_PROFILE_SUCCESS:
      return {...state, data: action.data};
    case UPDATE_PROFILE_SUCCESS:
      return {...state, data: action.data};
    case CREATE_PROFILE_SUCCESS:
      return {...state, data: action.data};
    default:
      return state;
  }
};
