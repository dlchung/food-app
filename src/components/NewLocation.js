import React, { Component } from 'react'

import LocationSearchBar from './LocationSearchBar'

export default class NewLocation extends Component {
  render() {
    return (
      <React.Fragment>
        <LocationSearchBar handleModalSubmit={this.props.handleModalSubmit} />
      </React.Fragment>
    )
  }
}
