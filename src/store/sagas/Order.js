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

export function* updateStatus({ data }) {
  console.log(data);
  const { id, status } = data;
  try {
    const response = yield call(api.put, `order/${id}`, { status });
    console.log('====================================');
    console.log(response);
    console.log('====================================');
    // yield put(AuthActios.loginSuccess(response.data));
  } catch (e) {
    // yield put(AuthActios.loginFailure());
  }
}
