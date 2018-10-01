import React, { Component } from 'react'

import SearchResultsItemRatings from './SearchResultsItemRatings'
import { fetchRestaurantRating } from '../adapters/restaurantsAdapter'

import { Card, Grid } from 'semantic-ui-react'

export default class SearchResultsItem extends Component {
  state = {
    showDetails: false,
    yelpRating: "n/a",
    foursquareRating: "n/a",
    googleplacesRating: "n/a",
    zomatoRating: "n/a"
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
          googleplacesRating={this.state.googleplacesRating}
          zomatoRating={this.state.zomatoRating}
        />
      </Card.Content>
    )

    return content
  }

  getRatings = () => {
    const yelp_resp = fetchRestaurantRating(this.props.restaurant.id, "yelp")
    yelp_resp.then(resp => {
      // console.log("yelp_resp", resp)
      if(resp.data["yelpRating"] && parseInt(resp.data["yelpRating"]) !== 0) {
        this.setState(resp.data)
      }
    })

    const foursquare_resp = fetchRestaurantRating(this.props.restaurant.id, "foursquare")
    foursquare_resp.then(resp => {
      // console.log("foursquare_resp", resp)
      if(resp.data["foursquareRating"] && parseInt(resp.data["foursquareRating"]) !== 0) {
        this.setState(resp.data)
      }
    })

    const googleplaces_resp = fetchRestaurantRating(this.props.restaurant.id, "googleplaces")
    googleplaces_resp.then(resp => {
      if(resp.data["googleplacesRating"] && parseInt(resp.data["googleplacesRating"]) !== 0) {
        this.setState(resp.data)
      }
    })

    const zomato_resp = fetchRestaurantRating(this.props.restaurant.id, "zomato")
    zomato_resp.then(resp => {
      if(resp.data["zomatoRating"] && parseInt(resp.data["zomatoRating"]) !== 0) {
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
