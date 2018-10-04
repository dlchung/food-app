import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { setLocation, setCurrentLocation } from './actions'

import HomeContainer from './components/HomeContainer'
import SearchResultsContainer from './components/SearchResultsContainer'
import NavBar from './components/NavBar'
import HomeSearchBar from './components/HomeSearchBar'
import GeoLocate from './components/GeoLocate'

import { Grid, Container } from 'semantic-ui-react'

class App extends Component {
  getLatLng = (latLng) => {
    // console.log("getLatLng", latLng)
    this.props.setLocation(latLng)
    this.props.setCurrentLocation(latLng)
  }

  render() {
    return (
      <React.Fragment>
        <Container textAlign="center">
          { this.props.latLng ? null : <GeoLocate getLatLng={this.getLatLng} /> }
        </Container>
        <Container>
          <NavBar />
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

const mapStateToProps = (state) => {
  return {
    latLng: state.latLng
  }
}

export default withRouter(connect(mapStateToProps, {setLocation, setCurrentLocation})(App))
