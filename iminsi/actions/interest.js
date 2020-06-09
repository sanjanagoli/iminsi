import * as interestsRequest from '../requests/interest-request';


const ActionTypes = {
  GET_INTERESTS: 'GET_INTERESTS',
  DATABASE_ERROR: 'DATABASE_ERROR',
};

const getInterests = () => {
  return (dispatch) => {
    interestsRequest.getInterests()
      .then((response) => {
        
        dispatch({ type: ActionTypes.GET_INTERESTS, payload: response });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.DATABASE_ERROR, payload: error });
      });
  };
};

export {
  ActionTypes,
  getInterests,
};
