import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { setLocation } from './actions'

import HomeContainer from './components/HomeContainer'
import SearchResultsContainer from './components/SearchResultsContainer'
import NavAvatar from './components/NavAvatar'
import HomeSearchBar from './components/HomeSearchBar'
import GeoLocate from './components/GeoLocate'

import { Grid, Container } from 'semantic-ui-react'

class App extends Component {
  getLatLng = (latLng) => {
    // console.log("getLatLng", latLng)
    this.props.setLocation(latLng)
  }

  render() {
    return (
      <React.Fragment>
        <GeoLocate getLatLng={this.getLatLng} />
        <Container>
          <NavAvatar />
          <Grid centered>
            <Grid.Row>
              <Grid.Column width={10}>
                <HomeSearchBar />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/search" component={SearchResultsContainer} />
        </Container>
      </React.Fragment>
    );
  }
}

export default connect(null, {setLocation})(App)
