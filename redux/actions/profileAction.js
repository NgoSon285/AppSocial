import {
  CHECK_PROFILE_REQUEST,
  UPDATE_PROFILE_REQUEST,
  CREATE_PROFILE_REQUEST,
  GET_ALL_PROFILE_REQUES,
  UPDATE_EXPERIENCE_REQUEST,
  UPDATE_EDUCATION_REQUEST,
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

export const updateExperience = (
  title,
  company,
  location,
  from,
  to,
  current,
  description,
) => ({
  type: UPDATE_EXPERIENCE_REQUEST,
  title,
  company,
  location,
  from,
  to,
  current,
  description,
});
export const updateEducation = (
  school,
  degree,
  from,
  to,
  fieldofstudy,
  current,
  description,
) => ({
  type: UPDATE_EDUCATION_REQUEST,
  school,
  degree,
  from,
  to,
  fieldofstudy,
  current,
  description,
});
