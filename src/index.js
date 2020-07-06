import React from 'react';
import ReactDOM from 'react-dom';
import './app/index.css';
import * as serviceWorker from './app/serviceWorker';
import { App } from './features/App/App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
