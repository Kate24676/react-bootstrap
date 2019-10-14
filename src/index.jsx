import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import { BrowserRouter } from 'react-router-dom';


render(
  (
    <BrowserRouter>
      <App name="Kate" />
    </BrowserRouter>
  ), document.getElementById('root')
);
