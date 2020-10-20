let tokenKey = 'token';

export function getToken() {
  const token = localStorage.getItem(tokenKey);
  return token ? `Bearer ${localStorage.getItem(tokenKey)}` : false;
}

export function logOut() {
  /*eslint-disable*/
  localStorage.removeItem(tokenKey);
  location.reload();
}

export function setToken(token) {
  localStorage.setItem(tokenKey, token);
}
