import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from  './reducers'
import thunk from 'redux-thunk'

import 'semantic-ui-css/semantic.min.css';

// let GoogleMapsLoader = require('google-maps')
// GoogleMapsLoader.KEY = process.env.REACT_APP_GOOGLE_PLACES_API_KEY
// GoogleMapsLoader.LIBRARIES = ['places']
// GoogleMapsLoader.load()

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
