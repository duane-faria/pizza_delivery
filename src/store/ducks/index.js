import { combineReducers } from 'redux';
import { reducers as Order } from './Order';
import { reducers as Auth } from './Auth';

export default combineReducers({
  Order,
  Auth,
});
