import { combineReducers } from 'redux';

import ArticleReducer from './articleReducer';
import UserReducer from './userReducer';
import InterestReducer from './interestReducer';

const rootReducer = combineReducers({
  article: ArticleReducer,
  user: UserReducer,
  // auth: AuthReducer,
  interest: InterestReducer,
});

export default rootReducer;
