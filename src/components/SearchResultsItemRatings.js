import React, { Component } from 'react'

import { Card, Segment, Statistic } from 'semantic-ui-react'

export default class SearchResultsItemRatings extends Component {
  componentDidMount() {
  }

  yelpColor = (num) => {
    if(num !== "n/a") {
      const score = parseInt(num, 10)
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

  foursquareColor = (num) => {
    if(num !== "n/a") {
      const score = parseInt(num, 10)
      if(score > 6.5) {
        return "green"
      } else if(score > 3.2) {
        return "yellow"
      } else {
        return "red"
      }
    }
    else {
      return "grey"
    }
  }

  googleplacesColor = (num) => {
    if(num !== "n/a") {
      const score = parseInt(num, 10)
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

  ratingSize = (score) => {
    if(score === "n/a") {
      return "tiny"
    }
    else {
      return "small"
    }
  }

  render() {
    return (
      <React.Fragment>
        <Card.Description>
          <Segment basic textAlign="center">
            <Statistic color={this.yelpColor(this.props.yelpRating)} size={this.ratingSize(this.props.yelpRating)}>
              <Statistic.Label>Yelp</Statistic.Label>
              <Statistic.Value>{this.props.yelpRating}</Statistic.Value>
            </Statistic>
            <Statistic color={this.foursquareColor(this.props.foursquareRating)} size={this.ratingSize(this.props.foursquareRating)}>
              <Statistic.Label>Foursquare</Statistic.Label>
              <Statistic.Value>{this.props.foursquareRating}</Statistic.Value>
            </Statistic>
            <Statistic color={this.googleplacesColor(this.props.googleplacesRating)} size={this.ratingSize(this.props.googleplacesRating)}>
              <Statistic.Label>Google</Statistic.Label>
              <Statistic.Value>{this.props.googleplacesRating}</Statistic.Value>
            </Statistic>
          </Segment>
        </Card.Description>
      </React.Fragment>
    )
  }
}
