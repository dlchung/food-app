import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from  './reducers'
import thunk from 'redux-thunk'

import 'semantic-ui-css/semantic.min.css';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
