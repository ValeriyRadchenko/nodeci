import * as React from 'react';
import { render } from 'react-dom';
const { Router, Route, hashHistory } = require('react-router');
import { Provider } from 'react-redux';
const { syncHistoryWithStore } = require('react-router-redux');
import store from './store';

import Layout from './containers/Layout';
import Projects from './containers/Projects';
import Login from './containers/Login';

import NotFound from './components/NotFound';

const history = syncHistoryWithStore(hashHistory, store);

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route component={Layout}>
        <Route path='/' component={Projects} />
        <Route path='/login' component={Login} />
        <Route path='*' component={NotFound} />
      </Route>
    </Router>
  </Provider>
);

render(routes, document.getElementById('root'));
