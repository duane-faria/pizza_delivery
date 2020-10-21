import axios from 'axios';
import { getToken, logOut } from './auth';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
});

api.interceptors.request.use(
  (config) => {
    if (getToken()) {
      // console.log(getToken());
      config.headers.Authorization = getToken();
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(null, (error) => {
  if (error.response.status == 401) logOut();
  return Promise.reject(error);
});

export default api;
