import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
const { browserHistory } = require('react-router');
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import reducer from './reducers';
import rootSaga from './saga';


const sagaMidelware = createSagaMiddleware();

const middlewares = [
  sagaMidelware,
  routerMiddleware(browserHistory)
];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({ collapsed: true });

  middlewares.push(logger);
}

const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middlewares)
  )
);

sagaMidelware.run(rootSaga);

export default store;
