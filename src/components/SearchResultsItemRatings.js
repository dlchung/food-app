import React, { Component } from 'react'

import { Card, Segment, Statistic } from 'semantic-ui-react'

export default class SearchResultsItemRatings extends Component {
  // state = {
  //   yelpRating: "n/a",
  //   foursquareRating: "n/a",
  //   grubhubRating: "n/a"
  // }
  componentDidMount() {
    // this.getRatings()
    // console.log("SearchResultsItemRatings", this.state)
  }

  // getRatings = () => {
  //   const yelp_resp = fetchRestaurantRating(this.props.restaurant.id, "yelp")
  //   yelp_resp.then(resp => {
  //     // console.log("yelp_resp", resp)
  //     this.setState(resp.data)
  //   })
  //
  //   const foursquare_resp = fetchRestaurantRating(this.props.restaurant.id, "foursquare")
  //   foursquare_resp.then(resp => {
  //     // console.log("foursquare_resp", resp)
  //     this.setState(resp.data)
  //   })
  // }

  statisticColor = (statistic) => {
    // if(statistic > 5) {
    //   statistic = statistic / 2
    // }

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
            <Statistic color={this.statisticColor(this.props.yelpRating)}>
              <Statistic.Value>{this.props.yelpRating}</Statistic.Value>
              <Statistic.Label>Yelp</Statistic.Label>
            </Statistic>
            <Statistic color={this.statisticColor(this.props.foursquareRating)}>
              <Statistic.Value>{this.props.foursquareRating}</Statistic.Value>
              <Statistic.Label>Foursquare</Statistic.Label>
            </Statistic>
          </Segment>
        </Card.Description>
      </React.Fragment>
    )
  }
}
