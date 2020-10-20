import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function ProtectedRoute(props) {
  const login = true;
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
