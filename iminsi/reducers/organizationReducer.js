import { ActionTypes } from '../actions';

const initialState = {

};

const OrganizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.API_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default OrganizationReducer;
