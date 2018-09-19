import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from  './reducers'

import 'semantic-ui-css/semantic.min.css';

// const store = createStore()

ReactDOM.render(
  <Provider>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
