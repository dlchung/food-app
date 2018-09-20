import React, { Component } from 'react'

export default class SearchResultsItem extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.restaurant.name}</h1>
      </React.Fragment>
    )
  }
}
