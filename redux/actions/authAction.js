import {SIGN_IN_REQUEST, SIGN_UP_REQUEST} from '../type';

export const signUpRequest = (name, email, password, navigation) => ({
  type: SIGN_UP_REQUEST,
  name,
  email,
  password,
  navigation,
});
export const signInRequest = (email, password, navigation) => ({
  type: SIGN_IN_REQUEST,
  email,
  password,
  navigation,
});
