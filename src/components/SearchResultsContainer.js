import React, { Component } from 'react'

import SearchResultsItem from './SearchResultsItem'

import { connect } from 'react-redux'

import { getAllRestaurants } from '../actions'

class SearchResultsContainer extends Component {
  componentDidMount() {
    this.props.getAllRestaurants()
    console.log(this.props)
  }

  componentDidUpdate() {
  }

  showResults = (restaurants) => {
    return restaurants.map(restaurant => {
      return <SearchResultsItem restaurant={restaurant} key={restaurant.id} />
    })
  }

  render() {
    // console.log("render")
    return (
      <React.Fragment>
        {this.props.restaurants.length > 0 ? this.showResults(this.props.restaurants) : null}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("STATE", state)
  return {
    restaurants: state.restaurants,
    selectedLocation: state.selectedLocation,
    latLng: state.latLng
  }
}

export default connect(mapStateToProps, {getAllRestaurants})(SearchResultsContainer)
