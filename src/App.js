import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import SearchResultsContainer from './components/SearchResultsContainer'
import NavAvatar from './components/NavAvatar'
import HomeSearchBar from './components/HomeSearchBar'

import { Grid, Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <NavAvatar />
          <Grid centered>
            <Grid.Row>
              <Grid.Column width={10}>
                <HomeSearchBar />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={SearchResultsContainer} />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
