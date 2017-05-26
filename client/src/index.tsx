import * as React from 'react';
import { render } from 'react-dom';
const { Router, Route, hashHistory } = require('react-router');
import { Provider } from 'react-redux';
const { syncHistoryWithStore } = require('react-router-redux');
import store from './store';

import Layout from './containers/Layout';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import Settings from './containers/Settings';
import People from './containers/People';
import History from './containers/History';
import Job from './containers/Job';

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
          <Route path='/' component={Dashboard} />
          <Route path='/settings' component={Settings} />
          <Route path='/people' component={People} />
          <Route path='/history' component={History} />
          <Route path='/create' component={Job} />
          <Route path='/:name/configure' component={Job} />
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
