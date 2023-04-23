import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

import { JorunalApp } from './JorunalApp';
import { store } from './store';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <JorunalApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
