import { combineReducers } from 'redux';

import ArticleReducer from './articleReducer';
import UserReducer from './userReducer';
import AuthReducer from './auth-reducer';

const rootReducer = combineReducers({
  article: ArticleReducer,
  user: UserReducer,
  auth: AuthReducer,
});

export default rootReducer;
