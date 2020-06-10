import { ActionTypes } from '../actions';

const initialState = {
  currentUser: null,
  availableCountries: null,
  loaded: false,
  articles: [],
  webView: true,
  organizations: [],
  interests: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      console.log('reached auth user');
      return { ...state, currentUser: action.payload, loaded: true };
    case ActionTypes.DEAUTH_USER:
      return { ...state, currentUser: {}, loaded: false };
    case ActionTypes.UPDATE_USER:
      return { ...state, currentUser: {} };
    case ActionTypes.GET_COUNTRIES:
      return { ...state, availableCountries: action.payload };
    case ActionTypes.ADD_USER_ARTICLES:
      return { ...state, currentUser: action.payload, loaded: true };
    case ActionTypes.DEL_USER_ARTICLES:
      return { ...state, currentUser: action.payload, loaded: true };
    case ActionTypes.ADD_USER_ORGS:
      return { ...state, currentUser: action.payload, loaded: true };
    case ActionTypes.TOGGLE_WEB:
      return { ...state, webView: !state.webView };
    case ActionTypes.GET_USER_INTERESTS:
      return { ...state, interests: action.payload, loaded: true };
    case ActionTypes.GET_ORGS:
      return { ...state, organizations: action.payload };
    case ActionTypes.GET_USER_ARTICLES:
      return { ...state, articles: action.payload, loaded: true };
    case ActionTypes.AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default UserReducer;
