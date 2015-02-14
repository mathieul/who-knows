import React from 'react';
import {DefaultRoute, Route, RouteHandler} from 'react-router';
import Application from './components/application';

export default (
  <Route handler={RouteHandler}>
    <DefaultRoute handler={Application} />
  </Route>
);
