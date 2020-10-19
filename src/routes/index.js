import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../views/Login';
import Orders from '../views/Orders';
import ProtectedRoute from './ProtectedRoute';
function routes() {
  return (
    <Switch>
      <Route exact path='/' component={Login}></Route>
      <ProtectedRoute exact path='/pedidos' component={Orders}></ProtectedRoute>
    </Switch>
  );
}

export default routes;
