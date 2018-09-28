import React, { Component } from 'react'

import { fetchRestaurantRating } from '../adapters/restaurantsAdapter'

import { Card, Segment, Statistic } from 'semantic-ui-react'

export default class SearchResultsItemRatings extends Component {
  state = {
    yelpRating: "N/A"
  }
  componentDidMount() {
    this.getRatings()
    // console.log("SearchResultsItemRatings", this.state)
  }

  getRatings = () => {
    const response = fetchRestaurantRating(this.props.restaurant.id, "yelp")
    response.then(resp => this.setState(resp.data))
  }

  render() {
    return (
      <React.Fragment>
        <Card.Description>
          <Segment basic textAlign="center">
            <Statistic>
              <Statistic.Value>{this.state.yelpRating}</Statistic.Value>
              <Statistic.Label>Yelp</Statistic.Label>
            </Statistic>
          </Segment>
        </Card.Description>
      </React.Fragment>
    )
  }
}
