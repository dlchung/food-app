import React, { Component } from 'react'

import SearchResultsItemRatings from './SearchResultsItemRatings'
import { fetchRestaurantRating } from '../adapters/restaurantsAdapter'

import { Card, Grid, Segment, Image } from 'semantic-ui-react'

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
    const address2 = `${this.props.restaurant.city}, ${this.props.restaurant.state}, ${this.props.restaurant.zipcode}`



    const content = (
      <Card.Content>
        <Grid>
          <Grid.Row stretched>
            <Grid.Column width={8}>
              <Segment basic>
                <Card.Description>
                  {address}<br />{address2}
                </Card.Description>
                <Card.Description>
                  {this.props.restaurant.phone}
                </Card.Description>
              </Segment>
              <Segment basic>
                <SearchResultsItemRatings
                  restaurant={this.props.restaurant}
                  yelpRating={this.state.yelpRating}
                  foursquareRating={this.state.foursquareRating}
                  googleplacesRating={this.state.googleplacesRating}
                  zomatoRating={this.state.zomatoRating}
                />
              </Segment>
            </Grid.Column>
            <Grid.Column width={8}>
              <Segment basic>
                <Image bordered rounded
                  src={this.getGoogleStaticMapUrl()}
                  as="a"
                  href={this.props.restaurant.googleplaces_url}
                  target="_blank"
                />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    )

    return content
  }

  getRatings = () => {
    const yelpResp = fetchRestaurantRating(this.props.restaurant.id, "yelp")
    yelpResp.then(resp => {
      // console.log("yelpResp", resp)
      if(resp.data["yelpRating"] && parseInt(resp.data["yelpRating"], 10) !== 0) {
        this.setState(resp.data)
      }
    })

    const foursquareResp = fetchRestaurantRating(this.props.restaurant.id, "foursquare")
    foursquareResp.then(resp => {
      // console.log("foursquareResp", resp)
      if(resp.data["foursquareRating"] && parseInt(resp.data["foursquareRating"], 10) !== 0) {
        this.setState(resp.data)
      }
    })

    const googleplacesResp = fetchRestaurantRating(this.props.restaurant.id, "googleplaces")
    googleplacesResp.then(resp => {
      if(resp.data["googleplacesRating"] && parseInt(resp.data["googleplacesRating"], 10) !== 0) {
        this.setState(resp.data)
      }
    })

    const zomatoResp = fetchRestaurantRating(this.props.restaurant.id, "zomato")
    zomatoResp.then(resp => {
      if(resp.data["zomatoRating"] && parseInt(resp.data["zomatoRating"], 10) !== 0) {
        this.setState(resp.data)
      }
    })
  }

  getGoogleStaticMapUrl = () => {
    const markers = `${this.props.restaurant.google_lat},${this.props.restaurant.google_lng}`
    const zoom = "14"
    const size = "500x250"
    const format = "jpg"
    const mapType = "roadmap"
    const GOOGLE_PLACES_API_KEY = process.env.REACT_APP_GOOGLE_PLACES_API_KEY

    const googleStaticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?markers=${markers}&zoom=${zoom}&size=${size}&format=${format}&maptype=${mapType}&key=${GOOGLE_PLACES_API_KEY}`

    return googleStaticMapUrl
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
