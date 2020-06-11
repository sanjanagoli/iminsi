// import all actions and action types from various action files

import {
  ActionTypes as articleActionTypes,
  getArticle,
  getArticles,
  incrementScore,
  decrementScore,
  getVerifiedArticles,
} from './article';

import {
  ActionTypes as userActionTypes,
  signUpUser,
  signInUser,
  updateUser,
  getUserInterests,
  getOrganizations,
  getUserArticles,
  addUserOrganizations,
  getAvailableCountries,
  addUserArticles,
  removeUserArticles,
  toggleWebView,
  addInterests,
  addSelectedInterest,
  signOut,
} from './user';

import {
  ActionTypes as interestActionTypes,
  getInterests,
} from './interest';

// combine all action types
const ActionTypes = {};

Object.keys(interestActionTypes).forEach((key) => {
  ActionTypes[key] = interestActionTypes[key];
});

Object.keys(articleActionTypes).forEach((key) => {
  ActionTypes[key] = articleActionTypes[key];
});


Object.keys(userActionTypes).forEach((key) => {
  ActionTypes[key] = userActionTypes[key];
});

// export all action types in one object, as well as each action
export {
  ActionTypes,
  getArticle,
  getArticles,
  incrementScore,
  decrementScore,
  signUpUser,
  signInUser,
  addSelectedInterest,
  updateUser,
  getUserInterests,
  getOrganizations,
  getUserArticles,
  getVerifiedArticles,
  addUserOrganizations,
  getInterests,
  getAvailableCountries,
  addUserArticles,
  removeUserArticles,
  toggleWebView,
  addInterests,
  signOut,
};
