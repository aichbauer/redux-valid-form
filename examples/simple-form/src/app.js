import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  hashHistory,
  Route,
  Router,
} from 'react-router';
import {
  routerMiddleware,
  syncHistoryWithStore,
} from 'react-router-redux';
import {
  applyMiddleware,
  createStore,
} from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import allReducers from './reducers/index';

import index from './containers/index';

const routingMiddleware = routerMiddleware(hashHistory);

const store = createStore(allReducers, composeWithDevTools(
  applyMiddleware(ReduxThunk, routingMiddleware),
));

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={index} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

