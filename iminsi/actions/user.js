import * as userRequest from '../requests/user';

const ActionTypes = {
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  UPDATE_USER: 'UPDATE_USER',
  AUTH_ERROR: 'AUTH_ERROR',
};

const signUpUser = (data) => {
  return (dispatch) => {
    userRequest.signUp(data)
      .then((response) => {
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
        dispatch({ type: ActionTypes.AUTH_USER, payload: response.data });
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


export {
  ActionTypes,
  signUpUser,
  signInUser,
  updateUser,
};
