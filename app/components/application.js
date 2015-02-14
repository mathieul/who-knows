import React from 'react';
import Router from 'react-router';

let {RouteHandler} = Router;

export default React.createClass({
  render() {
    return (
      <div className="application">
        <h1>Hello</h1>
        <RouteHandler {...this.props} />
      </div>
    );
  }
});
