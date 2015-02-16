import React from 'react';
import {Link} from 'react-router';
import NavigationLink from './navigation-link';

export default React.createClass({
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <NavigationLink to="main-layout">Main</NavigationLink>
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
    alert('sign-out!');
  }
});
