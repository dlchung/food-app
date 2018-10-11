import React, { Component } from 'react'

import SearchResultsItem from './SearchResultsItem'

import { connect } from 'react-redux'

import { getAllRestaurants, getNearbyRestaurants, setAllowResults } from '../actions'

import { Loader, Dimmer, Header } from 'semantic-ui-react'

class SearchResultsContainer extends Component {
  // state = {
  //   getResults: this.props.getResults,
  // }

  componentDidMount() {
    // console.log(this.props.latLng)
    this.createResults()
    // console.log("componentDidMount", this.props)
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("componentDidUpdate", this.props, prevProps)
    // if(this.props.allowResults === true) {
    //   if(this.props.latLng !== prevProps.latLng) {
    //       console.log("different")
    //       // this.setState({ getResults: false }, () => console.log("triggered"))
    //       this.props.setAllowResults(false)
    //       this.createResults()
    //   }
    // }

    if(this.props.keyword !== prevProps.keyword || this.props.allowResults === true) {
      console.log("different")
      this.props.setAllowResults(false)
      this.createResults()
    }

    // if(this.props.latlng != prevProps.latLng) {
    //   if(this.props.keyword !== prevProps.keyword) {
    //     console.log("different")
    //     // this.setState({ loading: true })
    //     this.createResults()
    //   }
    // }
  }

  createResults = () => {
    const latLng = this.props.latLng
    const keyword = this.props.keyword

    if(latLng && keyword) {
      // console.log("getNearbyRestaurants")
      this.props.getNearbyRestaurants(latLng, keyword)
    } else {
      // console.log("getAllRestaurants")
      this.props.getAllRestaurants()
    }

    // this.setState({ loading: false })
    // this.props.setSearchLoading(false)
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
        <Dimmer active={this.props.isFetching ? true : false}>
          <Loader content="Loading..." />
        </Dimmer>

        <Header size="medium" color="grey">Showing top {this.props.restaurants.length} results...</Header>
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
