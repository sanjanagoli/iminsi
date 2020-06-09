import * as articleRequest from '../requests/article-request';

const ActionTypes = {
  GET_ARTICLES: 'GET_ARTICLES',
  GET_ARTICLE: 'GET_ARTICLE',
  API_ERROR: 'API_ERROR',
  INCREMENT_SCORE: 'INCREMENT_SCORE',
  DECREMENT_SCORE: 'DECREMENT_SCORE',
  GET_VERIFIED: 'GET_VERIFIED',
};


const DECREMENT = -1;
const INCREMENT = 1;

const getArticle = (articleID) => {
  return (dispatch) => {
    articleRequest.getArticle(articleID)
      .then((response) => {
        dispatch({ type: ActionTypes.GET_ARTICLE, payload: { data: response } });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.API_ERROR, payload: error });
      });
  };
};

const getArticles = () => {
  return (dispatch) => {
    articleRequest.getAllArticles()
      .then((response) => {
        dispatch({ type: ActionTypes.GET_ARTICLES, payload: { data: response } });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.API_ERROR, payload: error });
      });
  };
};

const incrementScore = (articleID, change) => {
  console.log(articleID)
  console.log(change)
  return (dispatch) => {
    articleRequest.updateArticleScore(articleID, change)
      .then((response) => {
        dispatch({ type: ActionTypes.GET_ARTICLES, payload: { data: response } });
      })
      .catch((error) => {
        console.log("failed to increment")
        
        dispatch({ type: ActionTypes.API_ERROR, payload: error });
      });
  };
};

const decrementScore = (articleID) => {
  return (dispatch) => {
    articleRequest.updateArticleScore(articleID, DECREMENT)
      .then((response) => {
        dispatch({ type: ActionTypes.GET_ARTICLES, payload: { data: response } });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.API_ERROR, payload: error });
      });
  };
};

const getVerifiedArticles = () => {
  return (dispatch) => {
    articleRequest.getVerifiedArticles()
      .then((response) => {
        dispatch({ type: ActionTypes.GET_VERIFIED, payload: response });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.API_ERROR, payload: error });
      });
  };
};

export {
  ActionTypes,
  getArticle,
  getArticles,
  incrementScore,
  decrementScore,
  getVerifiedArticles,
};
