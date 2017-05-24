import * as React from 'react';
import { render } from 'react-dom';
const { Router, Route, browserHistory } = require('react-router');
import { Provider } from 'react-redux';
const { syncHistoryWithStore } = require('react-router-redux');
import store from './store';
import Layout from './containers/Layout';
import Projects from './containers/Projects';

const history = syncHistoryWithStore(browserHistory, store);

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route component={Layout}>
        <Route path="/" component={Projects} />
      </Route>
    </Router>
  </Provider>
)

render(routes, document.getElementById('root'));
