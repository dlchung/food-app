import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Switch, Route, Link, withRouter } from 'react-router-dom'

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
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/search" component={SearchResultsContainer} />
          </Switch>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(connect(null, {setLocation})(App))
