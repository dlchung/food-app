import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRestaurantRating } from '../adapters/restaurantsAdapter'

import SearchResultsItemRatings from './SearchResultsItemRatings'

import { Card, Grid, Segment, Image } from 'semantic-ui-react'

class SearchResultsDetails extends Component {
  constructor(props) {
    super(props)

    // lets create a dynamic initial state based on platforms in store
    let initialState = {}
    Object.keys(this.props.platforms).forEach(platform => {
      const newSet = {
        [platform]: {
          rating: "n/a",
          url: ""
        }
      }
      initialState = {...initialState, ...newSet}
    })

    this.state = {...initialState}
  }

  componentDidMount() {
    this.getRatings()
  }

  // gets ratings for each platform
  // platforms are provided by redux store
  getRatings = () => {
    // need only keys/slugs for platforms
    const platforms = Object.keys(this.props.platforms)

    platforms.forEach(platform => {
      const platformResp = fetchRestaurantRating(this.props.restaurant.id, platform)
      platformResp.then(resp => {
        let rating = this.state[`${platform}`].rating
        let url

        if(resp.data[`${platform}`]) {
          if(parseInt(resp.data[`${platform}`].rating, 10) !== 0) {
            rating = resp.data[`${platform}`].rating
          }
          if(resp.data[`${platform}`].url) {
            url = resp.data[`${platform}`].url
          }
        }

        this.setState({ [`${platform}`]: { rating, url } })

      })
    })
  }

  // returns static map url as string
  getStaticMapUrl = () => {
    // let restaurantMarker = ''
    // let currentLocationMarker = ''
    //
    // if(this.props.latLng) {
    //   restaurantMarker = `color:red|label:B|${this.props.restaurant.lat},${this.props.restaurant.lng}`
    //   currentLocationMarker = `color:green|label:A|${this.props.latLng.lat},${this.props.latLng.lng}`
    // } else {
    //   restaurantMarker = `color:red|${this.props.restaurant.lat},${this.props.restaurant.lng}`
    // }

    // const zoom = "14"
    // const size = "500x250"
    // const format = "jpg"
    // const mapType = "roadmap"
    // const GOOGLE_PLACES_API_KEY = process.env.REACT_APP_GOOGLE_PLACES_API_KEY

    // const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?markers=${restaurantMarker}&markers=${currentLocationMarker}&zoom=${zoom}&size=${size}&format=${format}&maptype=${mapType}&key=${GOOGLE_PLACES_API_KEY}`
    // const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?markers=${restaurantMarker}&markers=${currentLocationMarker}&size=${size}&format=${format}&maptype=${mapType}&key=${GOOGLE_PLACES_API_KEY}`

    // HERE MAPS API
    const HERE_APP_ID = process.env.REACT_APP_HERE_APP_ID
    const HERE_APP_CODE = process.env.REACT_APP_HERE_APP_CODE
    const width = "500"
    const height = "300"
    const poilbl = "1" // marker label type i.e. 0=numeric 1=alpha
    const poithm = "1" // marker theme
    const poitxs = "25" // marker text size
    const z = "" // zoom level
    const markerStartParams = "green;;;" // marker params - fillColor;textColor;textFontSize;customText
    const markerEndParams = "red;;;"
    let currentLocationLatLng
    const restaurantLatLng = `${this.props.restaurant.lat},${this.props.restaurant.lng}` // lat,lng
    let resource // api resource

    if(this.props.latLng) {
      currentLocationLatLng = `${this.props.latLng.lat},${this.props.latLng.lng}`
      resource = "routing"
    } else {
      resource = "route"
    }

    const mapUrl = `https://image.maps.api.here.com/mia/1.6/${resource}?app_id=${HERE_APP_ID}&app_code=${HERE_APP_CODE}&h=${height}&w=${width}&poix0=${currentLocationLatLng};${markerStartParams}&poix1=${restaurantLatLng};${markerEndParams}&waypoint0=${currentLocationLatLng}&waypoint1=${restaurantLatLng}&z=${z}&poilbl=${poilbl}&poithm=${poithm}&poitxs=${poitxs}`

    return mapUrl
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
                    src={this.getStaticMapUrl()}
                    as="a"
                    href={this.state.googleplaces.url}
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

const mapStateToProps = (state) => {
  return {
    platforms: state.platforms,
    latLng: state.latLng
  }
}

export default connect(mapStateToProps)(SearchResultsDetails)
