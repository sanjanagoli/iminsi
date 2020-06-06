import { ActionTypes } from '../actions';

const initialState = {
  currentUser: null,
  availableCountries: null,
  // interests: [],
  // organizations: [],
  // articles: [],
};

const UserReducer = (state = initialState, action) => {
  // console.log('in the user reducer', action.payload);
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { ...state, currentUser: action.payload };
    case ActionTypes.DEAUTH_USER:
      return { ...state, currentUser: {} };
    case ActionTypes.UPDATE_USER:
      return { ...state, currentUser: {} };
    case ActionTypes.GET_COUNTRIES:
      return { ...state, availableCountries: action.payload };
    // case ActionTypes.GET_INTERESTS:
    //   return { ...state, interests: action.payloaddata };
    // case ActionTypes.GET_ORGS:
    //   return { ...state, organizations: action.payload };
    // case ActionTypes.GET_USER_ARTICLES:
    //   return { ...state, articles: action.payload };
    case ActionTypes.AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default UserReducer;
