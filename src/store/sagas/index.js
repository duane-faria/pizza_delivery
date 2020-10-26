import { all, takeLatest } from 'redux-saga/effects';
import { OrderTypes } from '../ducks/Order';
import { AuthTypes } from '../ducks/Auth';
import { load, updateStatus } from './Order';
import { load as login } from './Auth';

export default function* rootSaga() {
  yield all([
    takeLatest(OrderTypes.LOAD_REQUEST, load),
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(OrderTypes.UPDATE_STAGE_REQUEST, updateStatus),
  ]);
}
