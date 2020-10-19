import { call, put } from 'redux-saga/effects';

import OrderActios from '../../store/ducks/Order';

import api from '../../services/api';

export function* load() {
  try {
    const response = yield call(api.get, 'order');
    yield put(OrderActios.loadSuccess(response.data));
  } catch (e) {
    yield put(OrderActios.loadFailure());
  }
}
