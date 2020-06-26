import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import authentication from '../Services/authentication.service'

const PrivateRoute = ({ component: Component, ...rest})=> (
  <Route {...rest} render={(props) => (
    authentication.isAuthenticated()
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);

export default PrivateRoute