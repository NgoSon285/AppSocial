import {combineReducers} from 'redux';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
export const reducers = combineReducers({
  authReducer,
  profileReducer,
});
