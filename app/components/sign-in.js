import React from 'react/addons';
import {Navigation} from 'react-router';
import SignInActions from '../actions/sign-in';

export default React.createClass({
  mixins: [Navigation, React.addons.LinkedStateMixin],

  getInitialState() {
    return {email: null};
  },

  render() {
    return (
      <div className="login">
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
                       required />
              </div>
              <div className="form-group-controls">
                <label htmlFor="password" className="sr-only">Password</label>
                <input type="password"
                       id="password"
                       valueLink={this.linkState('password')}
                       placeholder="Password"
                       required />
              </div>
              <div className="form-group-actions">
                <button type="submit" className="btn-sign-in">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  },

  componentDidMount() {
    this.refs.email.getDOMNode().focus();
  },

  handleSubmit(event) {
    event.preventDefault();
    SignInActions.authenticate(this.state.email, this.state.password);
    this.replaceState(this.getInitialState());
  }
});
