import React, { Component } from 'react'

import SearchResultsItem from './SearchResultsItem'

import { connect } from 'react-redux'

import { getAllRestaurants, getNearbyRestaurants } from '../actions'

import { Loader, Dimmer } from 'semantic-ui-react'

class SearchResultsContainer extends Component {
  state = {
    loading: false,
    getResults: true
  }

  componentDidMount() {
    // console.log(this.props.latLng)
    this.createResults()
  }

  componentDidUpdate(prevProps) {
    console.log("update", this.state)
    // console.log("PROPS", this.props)
    // console.log("PREVPROPS", prevProps)

    if(this.props.keyword !== prevProps.keyword) {
      console.log("different")
      // this.setState({ loading: true })
      this.createResults()
    }
  }

  createResults = () => {
    const latLng = this.props.latLng
    const keyword = this.props.keyword

    if(this.props.latLng && this.props.keyword) {
      console.log("getNearbyRestaurants")
      this.props.getNearbyRestaurants(latLng, keyword)
    } else {
      console.log("getAllRestaurants")
      this.props.getAllRestaurants()
    }

    // this.setState({ loading: false })
  }

  renderResults = (restaurants) => {
    return restaurants.map(restaurant => {
      return <SearchResultsItem restaurant={restaurant} key={restaurant.id} />
    })
  }

  render() {
    // console.log("render", this.props)
    return (
      <React.Fragment>
        <div>
          <Dimmer active={this.state.loading ? true : false}>
            <Loader content="Loading..." />
          </Dimmer>

          {this.props.restaurants.length > 0 ? this.renderResults(this.props.restaurants) : null}
        </div>

      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log("STATE", state)
  return {
    restaurants: state.restaurants,
    latLng: state.latLng,
    keyword: state.keyword
  }
}

export default connect(mapStateToProps, {getAllRestaurants, getNearbyRestaurants})(SearchResultsContainer)
