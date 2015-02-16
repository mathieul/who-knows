import React from 'react';
import {Navigation, RouteHandler} from 'react-router';
import Reflux from 'reflux';
import authenticationStore from '../stores/authentication';
import NavigationBar from './navigation/bar';

export default React.createClass({
  mixins: [
    Navigation,
    Reflux.listenTo(authenticationStore, 'onAuthenticationChange')
  ],

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
  },

  onAuthenticationChange(authenticated) {
    if (authenticated === false) {
      this.transitionTo('sign-in');
    }
  }
});
