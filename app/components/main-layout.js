import React from 'react';
import {RouteHandler, State} from 'react-router';

export default React.createClass({
  mixins: [State],

  render() {
    let params = this.getParams();

    return (
      <div className="main-layout">
        <h1>Welcome {params.uid}</h1>
        <RouteHandler {...this.props} />
      </div>
    );
  }
});
