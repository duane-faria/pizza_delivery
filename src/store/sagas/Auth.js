import { call, put } from 'redux-saga/effects';

import AuthActios from '../../store/ducks/Auth';

import api from '../../services/api';

export function* load({ credentials }) {
  console.log('saga auth load');
  
  try {
    const response = yield call(api.post, 'session',credentials);
    yield put(AuthActios.loginSuccess(response.data));
  } catch (e) {
    console.log(e);
    yield put(AuthActios.loadFailure());
  }
}
