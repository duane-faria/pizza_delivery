import { all, takeLatest } from 'redux-saga/effects';
import { OrderTypes } from '../ducks/Order';
import { load } from './Order';

export default function* rootSaga() {
  yield all([takeLatest(OrderTypes.LOAD_REQUEST, load)]);
}
