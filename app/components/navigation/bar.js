import React from 'react';
import Link from './link';
import AuthenticationActions from '../../actions/authentication';

export default React.createClass({
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <Link to="main-layout">Main</Link>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href onClick={this.handleSignOut}>Sign Out</a></li>
          </ul>
        </div>
      </nav>
    );
  },

  handleSignOut(event) {
    event.preventDefault();
    AuthenticationActions.signOut();
  }
});
