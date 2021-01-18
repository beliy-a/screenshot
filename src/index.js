import React from 'react';
import ReactDOM from 'react-dom';
// Components
import App from './App';
// Other
import store from './app/store';
import { Provider } from 'react-redux';
// Styles
import './scss/index.scss';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
