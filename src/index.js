import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'; /* this is a npm package*/
import './elements.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StoreProvider } from './store';

if (
  document.location.protocol === 'http:' &&
  document.location.host === 'www.goclimatestriking.se'
)
  document.location.protocol = 'https:';

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
