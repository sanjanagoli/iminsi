import * as userRequest from '../requests/user-request';

const ActionTypes = {
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  UPDATE_USER: 'UPDATE_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  GET_USER_INTERESTS: 'GET_USER_INTERESTS',
  GET_ORGS: 'GET_ORGS',
  GET_USER_ARTICLES: 'GET_USER_ARTICLES',
  GET_COUNTRIES: 'GET_COUNTRIES',
  ADD_USER_ARTICLES: 'ADD_USER_ARTICLES',
  DEL_USER_ARTICLES: 'DEL_USER_ARTICLES',
  TOGGLE_WEB: 'TOGGLE_WEB',
  ADD_USER_ORGS: 'ADD_USER_ORGS',
  ADD_INTERESTS: 'ADD_INTERESTS',
};

const signUpUser = (data, nav, path) => {
  return (dispatch) => {
    userRequest.signUp(data)
      .then((response) => {
        dispatch({ type: ActionTypes.AUTH_USER, payload: response.user });
        nav.navigate(path, { user: response });
      })
      .catch((error) => {
        console.log('Sign up failed');
        dispatch({ type: ActionTypes.AUTH_ERROR, payload: error });
      });
  };
};

const signInUser = (data, nav, path) => {
  return (dispatch) => {
    userRequest.signIn(data)
      .then((response) => {
        console.log('sign in successful');
        dispatch({ type: ActionTypes.AUTH_USER, payload: response.user });
        nav.navigate(path);
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.AUTH_ERROR, payload: error });
        console.log('Sign in failed');
      });
  };
};

const signOut = (data, nav, path) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.DEAUTH_USER });
    nav.navigate(path);
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
        console.log('interests action response', response);
        dispatch({ type: ActionTypes.GET_USER_INTERESTS, payload: response });
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

const addUserOrganizations = (userID, organization) => {
  return (dispatch) => {
    userRequest.addUserOrganizations(userID, organization)
      .then((response) => {
        console.log('org added');
        dispatch({ type: ActionTypes.ADD_USER_ORGS, payload: response });
      })
      .catch((error) => {
        console.log(organization);
        dispatch({ type: ActionTypes.AUTH_ERROR, payload: error });
      });
  };
};

const addUserArticles = (user, article) => {
  return (dispatch) => {
    userRequest.addUserArticles(user, article)
      .then((response) => {
        dispatch({ type: ActionTypes.ADD_USER_ARTICLES, payload: response });
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
        dispatch({ type: ActionTypes.DEL_USER_ARTICLES, payload: response });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.AUTH_ERROR, payload: error });
      });
  };
};

const addInterests = (user, interests) => {
  console.log('the user object', user);
  return (dispatch) => {
    console.log('starjjkted', interests);
    userRequest.addInterests(user, interests)
      .then((response) => {
        console.log('started', response);
        dispatch({ type: ActionTypes.ADD_INTERESTS, payload: response });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.AUTH_ERROR, payload: error });
      });
  };
};

const toggleWebView = () => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.TOGGLE_WEB });
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
  addUserOrganizations,
  addInterests,
  signOut,
};
