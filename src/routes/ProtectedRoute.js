import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function ProtectedRoute(props) {
  const login = true;
  if (login) {
    return <Route {...props} />;
  } else {
    return <Redirect to='/' />;
  }
}
