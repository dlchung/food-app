import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllRestaurants, getNearbyRestaurants, setAllowResults } from '../actions'

import SearchResultsItem from './SearchResultsItem'

import { Loader, Dimmer, Header } from 'semantic-ui-react'

class SearchResultsContainer extends Component {

  componentDidMount() {
    this.createResults()
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.keyword !== prevProps.keyword || this.props.allowResults === true) {
      console.log("different")
      this.props.setAllowResults(false)
      this.createResults()
    }
  }

  createResults = () => {
    const latLng = this.props.latLng
    const keyword = this.props.keyword

    if(latLng && keyword) {
      this.props.getNearbyRestaurants(latLng, keyword)
    } else {
      this.props.getAllRestaurants()
    }
  }

  renderResults = (restaurants) => {
    return restaurants.map(restaurant => {
      return <SearchResultsItem restaurant={restaurant} key={restaurant.id} />
    })
  }

  render() {
    return (
      <React.Fragment>
        <Dimmer active={this.props.isFetching ? true : false}>
          <Loader content="Loading..." />
        </Dimmer>

        <Header size="medium" color="grey">Showing top {this.props.restaurants.length} results ranked by distance...</Header>
        {this.props.restaurants.length > 0 ? this.renderResults(this.props.restaurants) : null}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log("STATE", state)
  return {
    restaurants: state.restaurants,
    latLng: state.latLng,
    keyword: state.keyword,
    isFetching: state.isFetching,
    allowResults: state.allowResults
  }
}

export default connect(mapStateToProps, {getAllRestaurants, getNearbyRestaurants, setAllowResults})(SearchResultsContainer)
