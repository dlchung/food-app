import React, { Component } from 'react'

import { Card, Segment, Statistic } from 'semantic-ui-react'

export default class SearchResultsItemRatings extends Component {

  fivePointColor = (num) => {
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

  tenPointColor = (num) => {
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

  ratingSize = (score) => {
    if(score === "n/a") {
      return "tiny"
    }
    else {
      return "small"
    }
  }

  platformUrl = (platform, text) => {
    if(this.props[`${platform}`].url) {
      return (<a href={this.props[`${platform}`].url} target="_blank">{text}</a>)
    }
    else {
      return text
    }
  }

  render() {
    // console.log("SearchResultsItemRatings", this.props)
    const yelpRating = this.props.yelp.rating
    const foursquareRating = this.props.foursquare.rating
    const googleplacesRating = this.props.googleplaces.rating
    const zomatoRating = this.props.zomato.rating

    return (
      <React.Fragment>
        <Card.Description>
          <Segment basic textAlign="left">
            <Statistic color={this.fivePointColor(yelpRating)} size={this.ratingSize(yelpRating)}>
              <Statistic.Label>{this.platformUrl("yelp", "Yelp")}</Statistic.Label>
              <Statistic.Value>{yelpRating}</Statistic.Value>
            </Statistic>
            <Statistic color={this.tenPointColor(foursquareRating)} size={this.ratingSize(foursquareRating)}>
              <Statistic.Label>{this.platformUrl("foursquare", "Foursquare")}</Statistic.Label>
              <Statistic.Value>{foursquareRating}</Statistic.Value>
            </Statistic>
            <Statistic color={this.fivePointColor(googleplacesRating)} size={this.ratingSize(googleplacesRating)}>
              <Statistic.Label>{this.platformUrl("googleplaces", "Google")}</Statistic.Label>
              <Statistic.Value>{googleplacesRating}</Statistic.Value>
            </Statistic>
            <Statistic color={this.fivePointColor(zomatoRating)} size={this.ratingSize(zomatoRating)}>
              <Statistic.Label>{this.platformUrl("zomato", "Zomato")}</Statistic.Label>
              <Statistic.Value>{zomatoRating}</Statistic.Value>
            </Statistic>
          </Segment>
        </Card.Description>
      </React.Fragment>
    )
  }
}
