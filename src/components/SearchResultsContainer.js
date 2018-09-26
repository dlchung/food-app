import React, { Component } from 'react'

// import { Redirect } from 'react-router-dom'

import SearchResultsItem from './SearchResultsItem'

import { connect } from 'react-redux'

import { getAllRestaurants, getNearbyRestaurants } from '../actions'

import { Loader, Dimmer } from 'semantic-ui-react'

class SearchResultsContainer extends Component {
  state = {
    loading: true,
    redirect: false
  }

  componentDidMount() {
    if(!this.props.latLng) {
      this.props.getAllRestaurants()
    }
  }

  componentDidUpdate() {
    // console.log(this.props.latLng, this.props.restaurants.length > 0)
    if(this.props.latLng && this.props.restaurants.length < 1) {
      this.props.getNearbyRestaurants(this.props.latLng)
    }

    if(this.props.restaurants.length > 1 && this.state.loading !== false) {
      // console.log("TESTING")
      this.setState({ loading: false })
    }

    // console.log("PROPS", this.props)
  }

  // setRedirect = () => {
  //   this.setState({ redirect: true })
  // }
  //
  // renderRedirect = () => {
  //   if(this.state.redirect) {
  //     return <Redirect to='/' />
  //   }
  // }

  showResults = (restaurants) => {
    return restaurants.map(restaurant => {
      return <SearchResultsItem restaurant={restaurant} key={restaurant.id} />
    })
  }

  render() {
    console.log("render", this.props)
    return (
      <React.Fragment>
        <div>
          <Dimmer active={this.state.loading ? true : false}>
            <Loader content="Loading..." />
          </Dimmer>

          {this.props.restaurants.length > 0 ? this.showResults(this.props.restaurants) : null}
        </div>

      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log("STATE", state)
  return {
    restaurants: state.restaurants,
    selectedLocation: state.selectedLocation,
    latLng: state.latLng
  }
}

export default connect(mapStateToProps, {getAllRestaurants, getNearbyRestaurants})(SearchResultsContainer)
