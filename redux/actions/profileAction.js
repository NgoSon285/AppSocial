import {
  CHECK_PROFILE_REQUEST,
  UPDATE_PROFILE_REQUEST,
  CREATE_PROFILE_REQUEST,
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
