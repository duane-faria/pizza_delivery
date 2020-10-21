import { store } from '../store/index';
import AuthActions from '../store/ducks/Auth';

export function getToken() {
  let { Auth } = store.getState();
  if (Auth && Auth.token && Auth.token.length > 0) {
    return `Bearer ${Auth.token}`;
  }
  return false;
}

export function logOut() {
  store.dispatch(AuthActions.logout());
}
