import { call, put } from 'redux-saga/effects';

import AuthActios from '../../store/ducks/Auth';

import api from '../../services/api';

export function* load({ credentials, next }) {
  try {
    const response = yield call(api.post, 'session', credentials);
    yield put(AuthActios.loginSuccess(response.data));
  } catch (e) {
    yield put(AuthActios.loginFailure());
    next();
  }
}
