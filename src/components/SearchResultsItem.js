import React, { Component } from 'react'

import { fetchRestaurantRatings } from '../adapters/restaurantsAdapter'

import { Card, List, Rating, Label, Segment, Statistic } from 'semantic-ui-react'

export default class SearchResultsItem extends Component {
  state = {
    showDetails: true,
    restaurantRatings: {}
  }

  handleClick = () => {
    // console.log("handleClick", e.currentTarget.querySelector(".restaurant-details"))
    // const container = e.currentTarget.querySelector(".restaurant-details")
    this.setState({ showDetails: !this.state.showDetails })
  }

  getRatings = () => {
    return fetchRestaurantRatings()
  }

  showDetails = () => {
    const address = this.props.restaurant.street
    const address_2 = `${this.props.restaurant.city}, ${this.props.restaurant.state}, ${this.props.restaurant.zipcode}`

    const ratings = this.getRatings()
    const square = { width: 150, height: 150}

    const content = (
      <Card.Content>
        <Card.Description>
          {address}<br />{address_2}
        </Card.Description>

        <Card.Description>
          <Segment basic>
            <Statistic>
              <Statistic.Value>{ratings.yelp}</Statistic.Value>
              <Statistic.Label>Yelp</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>{ratings.foursquare}</Statistic.Value>
              <Statistic.Label>Foursquare</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>{ratings.foursquare}</Statistic.Value>
              <Statistic.Label>TripAdvisor</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>{ratings.foursquare}</Statistic.Value>
              <Statistic.Label>Seamless</Statistic.Label>
            </Statistic>
          </Segment>
        </Card.Description>
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
