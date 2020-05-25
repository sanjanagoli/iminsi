import { combineReducers } from 'redux';

import ArticleReducer from './articleReducer';
import UserReducer from './userReducer';

const rootReducer = combineReducers({
  article: ArticleReducer,
  user: UserReducer,
});

export default rootReducer;
