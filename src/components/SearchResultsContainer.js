import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'

import SearchResultsItem from './SearchResultsItem'

import { connect } from 'react-redux'

import { getAllRestaurants, getNearbyRestaurants } from '../actions'

class SearchResultsContainer extends Component {
  // state = {
  //   redirect: false
  // }

  componentDidMount() {

  }

  componentDidUpdate() {
    // console.log(this.props.latLng, this.props.restaurants.length > 0)
    if(this.props.latLng && this.props.restaurants.length < 1) {
      this.props.getNearbyRestaurants(this.props.latLng)
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
        {this.props.restaurants.length > 0 ? this.showResults(this.props.restaurants) : null}
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
