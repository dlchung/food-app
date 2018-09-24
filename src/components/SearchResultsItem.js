import React, { Component } from 'react'

import { Card } from 'semantic-ui-react'

export default class SearchResultsItem extends Component {
  render() {
    return (
      <React.Fragment>
        <Card.Group>
          <Card fluid link header={this.props.restaurant.name} description={[`${this.props.restaurant.street}, ${this.props.restaurant.city}, ${this.props.restaurant.state}, ${this.props.restaurant.zipcode}`]} />
        </Card.Group>
      </React.Fragment>
    )
  }
}
