import React, { Component } from 'react'

import { fetchRestaurantRating } from '../adapters/restaurantsAdapter'

import { Card, Segment, Statistic } from 'semantic-ui-react'

export default class SearchResultsItemRatings extends Component {
  state = {
    yelpRating: "n/a",
    foursquareRating: "n/a",
    grubhubRating: "n/a"
  }
  componentDidMount() {
    this.getRatings()
    // console.log("SearchResultsItemRatings", this.state)
  }

  getRatings = () => {
    const response = fetchRestaurantRating(this.props.restaurant.id, "yelp")
    response.then(resp => this.setState(resp.data))
  }

  statisticColor = (statistic) => {
    if(statistic !== "n/a") {
      const score = parseInt(statistic, 10)
      if(score > 3.4) {
        return "green"
      } else if(score > 1.9) {
        return "yellow"
      } else {
        return "red"
      }
    }
    else {
      return "grey"
    }
  }

  render() {
    return (
      <React.Fragment>
        <Card.Description>
          <Segment basic textAlign="center">
            <Statistic color={this.statisticColor(this.state.yelpRating)}>
              <Statistic.Value>{this.state.yelpRating}</Statistic.Value>
              <Statistic.Label>Yelp</Statistic.Label>
            </Statistic>
            <Statistic color={this.statisticColor(this.state.foursquareRating)}>
              <Statistic.Value>{this.state.foursquareRating}</Statistic.Value>
              <Statistic.Label>Foursquare</Statistic.Label>
            </Statistic>
            <Statistic color={this.statisticColor(this.state.grubhubRating)}>
              <Statistic.Value>{this.state.grubhubRating}</Statistic.Value>
              <Statistic.Label>Grubhub</Statistic.Label>
            </Statistic>
          </Segment>
        </Card.Description>
      </React.Fragment>
    )
  }
}
