import React, { Component } from 'react'

import SearchResultsItemRatings from './SearchResultsItemRatings'
import { fetchRestaurantRating } from '../adapters/restaurantsAdapter'

import { Card, Grid } from 'semantic-ui-react'

export default class SearchResultsItem extends Component {
  state = {
    showDetails: false,
    yelpRating: "n/a",
    foursquareRating: "n/a"
  }

  componentDidMount() {
  }

  handleClick = () => {
    // console.log("handleClick", e.currentTarget.querySelector(".restaurant-details"))
    // const container = e.currentTarget.querySelector(".restaurant-details")
    if(this.state.showDetails === false) {
      this.getRatings()
    }

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

        <SearchResultsItemRatings
          restaurant={this.props.restaurant}
          yelpRating={this.state.yelpRating}
          foursquareRating={this.state.foursquareRating}
        />
      </Card.Content>
    )

    return content
  }

  getRatings = () => {
    const yelp_resp = fetchRestaurantRating(this.props.restaurant.id, "yelp")
    yelp_resp.then(resp => {
      // console.log("yelp_resp", resp)
      if(resp.data["yelpRating"]) {
        this.setState(resp.data)
      }
    })

    const foursquare_resp = fetchRestaurantRating(this.props.restaurant.id, "foursquare")
    foursquare_resp.then(resp => {
      // console.log("foursquare_resp", resp)
      if(resp.data["foursquareRating"]) {
        this.setState(resp.data)
      }
    })
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
