import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import SearchResultsContainer from './components/SearchResultsContainer'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={SearchResultsContainer} />
      </React.Fragment>
    );
  }
}

export default App;
