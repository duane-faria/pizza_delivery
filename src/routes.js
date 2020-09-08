import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './views/Login';
function routes() {
  return (
    <Switch>
      <Route exact path='/' component={Login}></Route>
    </Switch>
  );
}

export default routes;
