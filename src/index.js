import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';

import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);