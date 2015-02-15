import React from 'react';
import {DefaultRoute, Route, RouteHandler} from 'react-router';
import SignIn from './components/sign-in';
import MainLayout from './components/main-layout';

export default (
  <Route handler={RouteHandler}>
    <Route name="main-layout" path=":uid" handler={MainLayout} />
    <DefaultRoute handler={SignIn} />
  </Route>
);
