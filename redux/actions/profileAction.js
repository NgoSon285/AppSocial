import {CHECK_PROFILE_REQUEST, UPDATE_PROFILE_REQUEST} from '../type';

export const checkProfile = () => ({
  type: CHECK_PROFILE_REQUEST,
});
export const updateProfile = (
  levels,
  company,
  website,
  location,
  skills,
  githubName,
  tellUs,
  twitter,
  facebook,
  youtube,
  linkedIn,
  instagram,
  navigation,
) => ({
  type: UPDATE_PROFILE_REQUEST,
  levels,
  company,
  website,
  location,
  skills,
  githubName,
  tellUs,
  twitter,
  facebook,
  youtube,
  linkedIn,
  instagram,
  navigation,
});
