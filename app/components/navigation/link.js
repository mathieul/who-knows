import React from 'react';
import {Navigation, State} from 'react-router';

export default React.createClass({
  mixins: [Navigation, State],

  propTypes: {
    to: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <li className={this.activeClass()}>
        <a href={this.href()}>{this.props.children}</a>
      </li>
    );
  },

  href() {
    return this.makeHref(this.props.to);
  },

  activeClass() {
    return this.isActive(this.props.to) ? 'active' : '';
  }
});
