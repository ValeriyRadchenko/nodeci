import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux';
const { browserHistory } = require('react-router');
import reducer from './reducers';


const store = createStore(
  reducer,
  compose(
    applyMiddleware(
      routerMiddleware(browserHistory),
    )
  )
)

export default store;
