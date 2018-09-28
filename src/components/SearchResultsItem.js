import React, { Component } from 'react'

import SearchResultsItemRatings from './SearchResultsItemRatings'

import { Card, Grid } from 'semantic-ui-react'

export default class SearchResultsItem extends Component {
  state = {
    showDetails: true
  }

  componentDidMount() {
  }

  handleClick = () => {
    // console.log("handleClick", e.currentTarget.querySelector(".restaurant-details"))
    // const container = e.currentTarget.querySelector(".restaurant-details")
    this.setState({ showDetails: !this.state.showDetails })
  }

  showDetails = () => {
    const address = this.props.restaurant.street
    const address_2 = `${this.props.restaurant.city}, ${this.props.restaurant.state}, ${this.props.restaurant.zipcode}`

    const square = { width: 150, height: 150}

    const content = (
      <Card.Content>
        <Card.Description>
          <Grid>
            <Grid.Column>{address}<br />{address_2}</Grid.Column>
          </Grid>
        </Card.Description>

        <SearchResultsItemRatings restaurant={this.props.restaurant} />
      </Card.Content>
    )

    return content
  }

  render() {


    return (
      <React.Fragment>
        <Card.Group>
          <Card fluid>
            <Card.Content>
              <Card.Header onClick={this.handleClick}>{this.props.restaurant.name}</Card.Header>
            </Card.Content>
            { this.state.showDetails ? this.showDetails() : null }
          </Card>
        </Card.Group>
      </React.Fragment>
    )
  }
}
