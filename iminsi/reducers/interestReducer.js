/* eslint-disable prefer-object-spread */
import { ActionTypes } from '../actions/index';

const initialState = {
  interests: null,
};

const InterestReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_INTERESTS:
      console.log('in reducer', action.payload);
      return { ...state, interests: action.payload };
    case ActionTypes.DATABASE_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default InterestReducer;
