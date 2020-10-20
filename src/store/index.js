import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from './ducks';
import sagas from './sagas';

const persistConfig = {
  key: 'rootPizzaDelivery',
  storage,
  whitelist: ['Auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware();

const composer =
  process.env.NODE_ENV === 'development'
    ? compose(composeWithDevTools(applyMiddleware(sagaMiddleware)))
    : applyMiddleware(sagaMiddleware);

const store = createStore(persistedReducer, composer);

const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
