import {CREATE_A_POST_SUCCESS, GET_ALL_POST_SUCCESS} from '../type';

const initialState = {
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POST_SUCCESS:
      return {...state, data: action.data};
    case CREATE_A_POST_SUCCESS:
      return {...state, data: action.data};
    default:
      return state;
  }
};
