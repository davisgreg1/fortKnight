/* eslint-disable */
require('dotenv').config()

import React from 'react';
import {render} from 'react-dom';
import App from '../src/App';

render(
  <App/>, document.getElementById('root'));
  
  if (module.hot) {
    module.hot.accept();
  }
