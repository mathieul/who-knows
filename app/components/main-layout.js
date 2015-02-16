import React from 'react';
import {Navigation, RouteHandler} from 'react-router';
import authenticationStore from '../stores/authentication';
import NavigationBar from './navigation-bar';

export default React.createClass({
  mixins: [Navigation],

  getInitialState() {
    if (!authenticationStore.isAuthenticated()) {
      this.transitionTo('sign-in');
    }
    return {};
  },

  render() {
    return (
      <div className="main-layout">
        <NavigationBar />
        <div className="container">
          <h1 className="page-header">Main Layout</h1>
        </div>
        <RouteHandler {...this.props} />
      </div>
    );
  }
});
