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
import AccessRoute from './components/AccessRoute';

const history = syncHistoryWithStore(hashHistory, store);

const loggedInCheck = (user: any) => !!user;
const loggedOutCheck = (user: any) => !user;

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route component={Layout}>

        <AccessRoute store={store} check={loggedInCheck} redirect='/login'>
          <Route path='/' component={Projects} />
        </AccessRoute>

        <AccessRoute store={store} check={loggedOutCheck} redirect='/'>
          <Route path='/login' component={Login} />
        </AccessRoute>

        <Route path='*' component={NotFound} />
      </Route>
    </Router>
  </Provider>
);

render(routes, document.getElementById('root'));
