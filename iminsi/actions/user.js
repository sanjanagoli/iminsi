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
  ADD_USER_ARTICLES: 'ADD_USER_ARTICLES',
  DEL_USER_ARTICLES: 'DEL_USER_ARTICLES',
  TOGGLE_WEB: 'TOGGLE_WEB',
};

const signUpUser = (data, nav, path) => {
  return (dispatch) => {
    userRequest.signUp(data, nav, path)
      .then((response) => {
        console.log('in singupuser action', response);
        nav.navigate("On Boarding");
        dispatch({ type: ActionTypes.AUTH_USER, payload: response.data });
      })
      .catch((error) => {
        console.log("Sign up failed");
        dispatch({ type: ActionTypes.AUTH_ERROR, payload: error });
      });
  };
};

const signInUser = (data, nav, path) => {
  return (dispatch) => {
    userRequest.signIn(data)
      .then((response) => {
        dispatch({ type: ActionTypes.AUTH_USER, payload: response.user });
        nav.navigate(path);
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.AUTH_ERROR, payload: error });
        console.log("Sign in failed");
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
        dispatch({ type: ActionTypes.GET_ORGS, payload: response });
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
  return (dispatch) => {
    userRequest.getAvailableCountries()
      .then((response) => {
        dispatch({ type: ActionTypes.GET_COUNTRIES, payload: response });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.AUTH_ERROR, payload: error });
      });
  };
};

const addUserArticles = (user, article) => {
  return (dispatch) => {
    userRequest.addUserArticles(user, article)
      .then((response) => {
        dispatch({ type: ActionTypes.ADD_USER_ARTICLES, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.AUTH_ERROR, payload: error });
      });
  };
};

const removeUserArticles = (user, article) => {
  return (dispatch) => {
    userRequest.removeUserArticles(user, article)
      .then((response) => {
        dispatch({ type: ActionTypes.DEL_USER_ARTICLES, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.AUTH_ERROR, payload: error });
      });
  };
};

const toggleWebView = () => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.TOGGLE_WEB});
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
  addUserArticles,
  removeUserArticles,
  toggleWebView,
};
