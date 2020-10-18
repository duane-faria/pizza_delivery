import { createStore, compose, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';
import reducers from './ducks';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export default store;
