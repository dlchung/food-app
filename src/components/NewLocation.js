import React, { Component } from 'react'

import LocationSearchBar from './LocationSearchBar'

import { Grid } from 'semantic-ui-react'

export default class NewLocation extends Component {
  render() {
    return (
      <React.Fragment>
        <LocationSearchBar handleModalSubmit={this.props.handleModalSubmit} />
      </React.Fragment>
    )
  }
}
