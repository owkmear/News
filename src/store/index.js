import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import currencies from './reducers/currencies';
import news from './reducers/news';
import login from './reducers/login';
import registration from './reducers/registration';
import user from './reducers/user';
import ui from './reducers/ui';

const rootReducer = combineReducers({
  ui,
  user,
  login,
  registration,
  currencies,
  news,
});

const middleware = [thunk];

if (
  process.env.NODE_ENV === 'development' &&
  process.env.REACT_APP_REDUX_LOGGER_ACTIVE === 'true'
)
  middleware.push(createLogger());

const store = createStore(rootReducer, applyMiddleware(...middleware));
export default store;
