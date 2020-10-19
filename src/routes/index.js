import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../views/Login';
import Orders from '../views/Orders';
function routes() {
  return (
    <Switch>
      <Route exact path='/' component={Login}></Route>
      <Route exact path='/pedidos' component={Orders}></Route>
    </Switch>
  );
}

export default routes;
