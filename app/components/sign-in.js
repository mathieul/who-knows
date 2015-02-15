import React from 'react/addons';
import {Navigation} from 'react-router';
import Reflux from 'reflux';
import SignInActions from '../actions/sign-in';
import authenticationStore from '../stores/authentication';

export default React.createClass({
  mixins: [
    Navigation,
    React.addons.LinkedStateMixin,
    Reflux.listenTo(authenticationStore, 'onAuthenticationResult')
  ],

  getInitialState() {
    return {email: null, formDisabled: false};
  },

  render() {
    return (
      <div className="login">
        <div className="row">
          <div className="form-locator">
            <div className="form-well">
              <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <h2>Please sign in</h2>
                <div className="form-group-controls">
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input type="email"
                         id="email"
                         ref="email"
                         valueLink={this.linkState('email')}
                         placeholder="Email address"
                         disabled={this.state.formDisabled}
                         required />
                </div>
                <div className="form-group-controls">
                  <label htmlFor="password" className="sr-only">Password</label>
                  <input type="password"
                         id="password"
                         valueLink={this.linkState('password')}
                         placeholder="Password"
                         disabled={this.state.formDisabled}
                         required />
                </div>
                <div className="form-group-actions">
                  <button type="submit"
                          disabled={this.state.formDisabled}
                          className="btn-sign-in">Sign in</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {this.errorMessage()}
      </div>
    );
  },

  componentDidMount() {
    this.refs.email.getDOMNode().focus();
  },

  handleSubmit(event) {
    event.preventDefault();
    SignInActions.authenticate(this.state.email, this.state.password);
    this.setState({formDisabled: true});
  },

  onAuthenticationResult(success, errorMessage) {
    if (success) {
      this.transitionTo('main-layout', {email: this.state.email});
    } else {
      this.setState({
        formDisabled: false,
        password: null,
        errorMessage: errorMessage
      });
    }
  },

  errorMessage() {
    if (!this.state.errorMessage) { return; }

    return (
      <div className="message-container">
        <div className="error-message" role="alert">
          <strong>Oops...</strong> {this.state.errorMessage}
        </div>
      </div>
    );
  }
});
