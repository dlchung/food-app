import React, { Component } from 'react'

import { fetchAllRestaurants } from '../adapters/restaurantsAdapter'

export default class SearchResults extends Component {
  componentDidMount() {
    fetchAllRestaurants().then(console.log)
  }

  render() {
    return (
      <React.Fragment>
        Search Results
      </React.Fragment>
    )
  }
}
