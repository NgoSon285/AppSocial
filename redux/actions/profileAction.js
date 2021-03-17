import {
  CHECK_PROFILE_REQUEST,
  UPDATE_PROFILE_REQUEST,
  CREATE_PROFILE_REQUEST,
  GET_ALL_PROFILE_REQUES,
} from '../type';

export const checkProfile = () => ({
  type: CHECK_PROFILE_REQUEST,
});
export const updateProfile = (
  status,
  company,
  website,
  location,
  skills,
  github,
  tellUs,
  navigation,
  exp,
  edu,
) => ({
  type: UPDATE_PROFILE_REQUEST,
  status,
  company,
  website,
  location,
  skills,
  github,
  tellUs,
  navigation,
  exp,
  edu,
});
export const createProfile = (
  status,
  company,
  website,
  location,
  skills,
  github,
  tellUs,
  navigation,
) => ({
  type: CREATE_PROFILE_REQUEST,
  status,
  company,
  website,
  location,
  skills,
  github,
  tellUs,
  navigation,
});
export const getAllProfile = () => ({
  type: GET_ALL_PROFILE_REQUES,
});

export const deleteEducation = (id) => ({
  type: type,
  payload
})
