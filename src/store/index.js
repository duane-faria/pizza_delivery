import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';
import reducers from './ducks';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composer =
  process.env.NODE_ENV === 'development'
    ? compose(composeWithDevTools(applyMiddleware(sagaMiddleware)))
    : applyMiddleware(sagaMiddleware);

const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;
