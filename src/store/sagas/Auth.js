import { call, put } from 'redux-saga/effects';

import AuthActios from '../../store/ducks/Auth';

import api from '../../services/api';

export function* load({ credentials }) {  
  try {
    const response = yield call(api.post, 'session',credentials);
    yield put(AuthActios.loginSuccess(response.data));
  } catch (e) {
    console.log(e);
    yield put(AuthActios.loginFailure());
  }
}
