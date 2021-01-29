import {SIGN_IN_SUCCESS, SIGN_UP_SUCCESS} from '../type';

const initialState = {
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      console.log('token',action.data);
      return {...state, data: action.data};
    case SIGN_IN_SUCCESS:
      return {...state, data: action.data};
    default:
      return state;
  }
};
