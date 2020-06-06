import * as userRequest from '../requests/user-request';

const ActionTypes = {
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  UPDATE_USER: 'UPDATE_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  GET_INTERESTS: 'GET_INTERESTS',
  GET_ORGS: 'GET_ORGS',
  GET_USER_ARTICLES: 'GET_USER_ARTICLES',
  GET_COUNTRIES: 'GET_COUNTRIES',
};

const signUpUser = (data) => {
  return (dispatch) => {
    userRequest.signUp(data)
      .then((response) => {
        // console.log('in singupuser action', response);
        dispatch({ type: ActionTypes.AUTH_USER, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.AUTH_ERROR, payload: error });
      });
  };
};

const signInUser = (data) => {
  return (dispatch) => {
    userRequest.signIn(data)
      .then((response) => {
        // console.log(`response in action ${JSON.stringify(response.user)}`);
        dispatch({ type: ActionTypes.AUTH_USER, payload: response.user });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.AUTH_ERROR, payload: error });
      });
  };
};

const updateUser = (data) => {
  return (dispatch) => {
    userRequest.updateUser(data)
      .then((response) => {
        dispatch({ type: ActionTypes.UPDATE_USER, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.AUTH_ERROR, payload: error });
      });
  };
};

const getUserInterests = (user) => {
  return (dispatch) => {
    userRequest.getInterests(user)
      .then((response) => {
        // console.log('interests action response', response);
        dispatch({ type: ActionTypes.GET_INTERESTS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.AUTH_ERROR, payload: error });
      });
  };
};

const getOrganizations = (user) => {
  return (dispatch) => {
    userRequest.getOrganizations(user)
      .then((response) => {
        dispatch({ type: ActionTypes.GET_ORGS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.AUTH_ERROR, payload: error });
      });
  };
};

const getUserArticles = (user) => {
  return (dispatch) => {
    userRequest.getUserArticles(user)
      .then((response) => {
        dispatch({ type: ActionTypes.GET_USER_ARTICLES, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.AUTH_ERROR, payload: error });
      });
  };
};

const getAvailableCountries = () => {
  console.log('in this method');
  return (dispatch) => {
    userRequest.getAvailableCountries()
      .then((response) => {
        console.log('in user.js', response);
        dispatch({ type: ActionTypes.GET_COUNTRIES, payload: response });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.AUTH_ERROR, payload: error });
      });
  };
};

export {
  ActionTypes,
  signUpUser,
  signInUser,
  updateUser,
  getUserInterests,
  getOrganizations,
  getUserArticles,
  getAvailableCountries,
};
