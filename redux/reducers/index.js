import {combineReducers} from 'redux';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import postReducer from './postReducer';
export const reducers = combineReducers({
  authReducer,
  profileReducer,
  postReducer,
});
