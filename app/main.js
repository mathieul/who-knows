import '6to5ify/polyfill';
import jQuery from 'jquery';
global.jQuery = jQuery;
import 'bootstrap-sass';
import React from 'react';
import {run} from 'react-router';
import routes from './routes';

run(routes, // HistoryLocation,
  function (Handler, state) {
    React.render(
      <Handler params={state.params} />,
      document.getElementById('application')
    );
  }
);
