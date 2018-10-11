import React, { Component } from 'react'

import SearchResultsDetails from './SearchResultsDetails'

import { Card, Icon } from 'semantic-ui-react'

export default class SearchResultsItem extends Component {
  state = {
    showDetails: false
  }

  handleClick = () => {
    this.setState({ showDetails: !this.state.showDetails })
  }

  showDetails = () => {
    return <SearchResultsDetails restaurant={this.props.restaurant} handleClick={this.handleClick} />
  }

  render() {
    const address = this.props.restaurant.street
    const address2 = `${this.props.restaurant.city}, ${this.props.restaurant.state}, ${this.props.restaurant.zipcode}`

    return (
      <React.Fragment>
        <Card.Group>
          <Card fluid>
            <Card.Content>
              <Card.Header onClick={this.handleClick} className="result-header">
                <p>
                  {this.state.showDetails ? <Icon name="angle double down" color="red" /> : <Icon name="angle double right" color="red" />}
                  {this.props.restaurant.name}
                </p>
                <p className="result-description">
                  {address}, {address2}
                </p>
              </Card.Header>
            </Card.Content>
            { this.state.showDetails ? this.showDetails() : null }
          </Card>
        </Card.Group>
      </React.Fragment>
    )
  }
}
