import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  loginRequest: ['credentials'], // LOAD_REQUEST
  loginSuccess: ['data'],
  loadFailure: null,
});

export const AuthTypes = Types;

export default Creators;

export const INITIAL_STATE = Immutable({
  token: '',
  id: '',
  name: '',
  email: '',
});

export const reducers = createReducer(INITIAL_STATE, {
  [Types.LOGIN_SUCCESS]: (state, {data}) => {
    return state.merge({
      token: data.token,
      id: data.user.id,
      name: data.user.name,
      email: data.user.email,
    });
  },
});
