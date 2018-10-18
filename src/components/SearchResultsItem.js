import React, { Component } from 'react'
import { connect } from 'react-redux'
import geolib from 'geolib'

import SearchResultsDetails from './SearchResultsDetails'

import { Card, Icon, Grid } from 'semantic-ui-react'

class SearchResultsItem extends Component {
  state = {
    showDetails: false
  }

  handleClick = () => {
    this.setState({ showDetails: !this.state.showDetails })
  }

  showDetails = () => {
    return <SearchResultsDetails restaurant={this.props.restaurant} handleClick={this.handleClick} />
  }

  getDistance = () => {
    if(this.props.currentLocation && this.props.restaurant) {
      const a = {
        latitude: this.props.currentLocation.lat,
        longitude: this.props.currentLocation.lng
      }
      const b = {
        latitude: this.props.restaurant.lat,
        longitude: this.props.restaurant.lng
      }

      const distance = geolib.getDistance(a, b)
      return geolib.convertUnit("mi", distance, 1)
    }
  }

  render() {
    // console.log("RENDER", this.props.restaurant.lat, this.props.currentLocation.lat)
    const address = this.props.restaurant.street
    const address2 = `${this.props.restaurant.city}, ${this.props.restaurant.state}, ${this.props.restaurant.zipcode}`

    return (
      <React.Fragment>
        <Card.Group>
          <Card fluid color={this.state.showDetails ? "red" : "grey"}>
            <Card.Content>
              <Card.Header onClick={this.handleClick} className="result-header">
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={15}>
                      <p>
                        {this.props.restaurant.name}
                      </p>
                      <p className="result-description">
                        ({this.getDistance()} mi) {address}, {address2}
                      </p>
                    </Grid.Column>
                    <Grid.Column>
                      {this.state.showDetails ? <Icon name="chevron up" color="red" /> : <Icon name="chevron down" color="grey" />}
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card.Header>
            </Card.Content>
            { this.state.showDetails ? this.showDetails() : null }
          </Card>
        </Card.Group>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentLocation: state.currentLocation
  }
}

export default connect(mapStateToProps)(SearchResultsItem)
