import { ActionTypes } from '../actions';

const initialState = {
  user: {},
  interests: [],
  organizations: [],
  articles: []
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { ...state, user: action.payload.data };
    case ActionTypes.DEAUTH_USER:
      return { ...state, user: {} };
    case ActionTypes.UPDATE_USER:
      return { ...state, user: {} };
    case ActionTypes.GET_INTERESTS:
      return {...state, interests: action.payload.data}
    case ActionTypes.GET_ORGS:
      return {...state, organizations: action.payload.data}
    case ActionTypes.GET_USER_ARTICLES:
      return {...state, articles: action.payload.data}
    case ActionTypes.AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default UserReducer;
