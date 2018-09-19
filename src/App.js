import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import SearchResults from './components/SearchResults'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={SearchResults} />
      </React.Fragment>
    );
  }
}

export default App;
