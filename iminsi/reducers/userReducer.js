import { ActionTypes } from '../actions';

const initialState = {
  user: {},
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { ...state, user: action.payload.data };
    case ActionTypes.DEAUTH_USER:
      return { ...state, user: {} };
    case ActionTypes.UPDATE_USER:
      return { ...state, user: {} };
    case ActionTypes.AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default UserReducer;
