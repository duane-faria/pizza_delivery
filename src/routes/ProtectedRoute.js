import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getToken } from '../services/auth';

function ProtectedRoute(props) {
  const login = getToken();
  if (login) {
    return <Route {...props} />;
  } else {
    return <Redirect to='/' />;
  }
}

const mapStateToProps = (state) => ({
  Auth: state.Auth,
});

export default connect(mapStateToProps)(ProtectedRoute);
