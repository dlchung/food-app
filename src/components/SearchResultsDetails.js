import React, { Component } from 'react'

import { fetchRestaurantRating } from '../adapters/restaurantsAdapter'
import SearchResultsItemRatings from './SearchResultsItemRatings'

import { Card, Grid, Segment, Image } from 'semantic-ui-react'

export default class SearchResultsDetails extends Component {
  state = {
    yelp: {
      rating: "n/a",
      url: ""
    },
    foursquare: {
      rating: "n/a",
      url: ""
    },
    googleplaces: {
      rating: "n/a",
      url: ""
    },
    zomato: {
      rating: "n/a",
      url: ""
    },
    averageScore: 0
  }

  componentDidMount() {
    this.getRatings()
  }

  getRatings = () => {
    const platforms = ["yelp", "foursquare", "googleplaces", "zomato"]

    platforms.forEach(platform => {
      const platformResp = fetchRestaurantRating(this.props.restaurant.id, platform)
      platformResp.then(resp => {
        if(resp.data[`${platform}Rating`] && parseInt(resp.data[`${platform}Rating`], 10) !== 0) {
          // this.setState(resp.data)
          this.setState({
            [`${platform}`]: {
              rating: resp.data[`${platform}Rating`],
              url: this.props.restaurant[`${platform}_url`]
            }
          })
        }
      })
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

  // getAverageScore = () => {
  //   const scores = {
  //     yelp: this.state.yelpRating,
  //     foursquare: this.state.foursquareRating,
  //     googleplaces: this.state.googleplacesRating,
  //     zomato: this.state.zomatoRating
  //   }
  //
  //   let finalScore = 0
  //
  //   if(scores.yelp) {
  //     finalScore += scores.yelp
  //   }
  //   if(scores.foursquare) {
  //     const adjustedScore = scores.foursquare / 2
  //     finalScore += adjustedScore
  //   }
  //   if(scores.googleplaces) {
  //     finalScore += scores.googleplaces
  //   }
  //   if(scores.zomato) {
  //     finalScore += scores.zomato
  //   }
  //
  //   console.log("FINALSCORE", finalScore)
  //
  //   this.setState({ averageScore: finalScore })
  // }

  render() {
    const address = this.props.restaurant.street
    const address2 = `${this.props.restaurant.city}, ${this.props.restaurant.state}, ${this.props.restaurant.zipcode}`

    return (
      <React.Fragment>
        <Card.Content>
          <Grid>
            <Grid.Row stretched>
              <Grid.Column width={8}>
                <Segment basic>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column width={8}>
                        <Card.Description>
                          <p>{address}<br />{address2}</p>
                        </Card.Description>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Card.Description>
                          <p>{this.props.restaurant.phone}</p>
                        </Card.Description>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Segment>
                <Segment basic>
                  <SearchResultsItemRatings
                    restaurant={this.props.restaurant}
                    yelp={this.state.yelp}
                    foursquare={this.state.foursquare}
                    googleplaces={this.state.googleplaces}
                    zomato={this.state.zomato}
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
      </React.Fragment>
    )
  }
}
