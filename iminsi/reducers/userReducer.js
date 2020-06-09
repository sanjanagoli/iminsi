import { ActionTypes } from '../actions';

const initialState = {
  currentUser: null,
  availableCountries: null,
  loaded: false,
  articles: [],
  webView: true,
  organizations: [],
  interests: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { ...state, currentUser: action.payload, loaded: true };
    case ActionTypes.DEAUTH_USER:
      return { ...state, currentUser: {}, loaded: false };
    case ActionTypes.UPDATE_USER:
      return { ...state, currentUser: {} };
    case ActionTypes.GET_COUNTRIES:
      return { ...state, availableCountries: action.payload };
    case ActionTypes.TOGGLE_WEB:
      return { ...state, webView: !state.webView };
    case ActionTypes.GET_INTERESTS:
      return { ...state, interests: action.payloaddata };
    case ActionTypes.GET_ORGS:
      return { ...state, organizations: action.payload };
    case ActionTypes.GET_USER_ARTICLES:
      return { ...state, articles: action.payload };
    case ActionTypes.AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default UserReducer;
