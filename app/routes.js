import React from 'react';
import {DefaultRoute, Route, RouteHandler} from 'react-router';
import SignIn from './components/sign-in';

export default (
  <Route handler={RouteHandler}>
    <DefaultRoute handler={SignIn} />
  </Route>
);
