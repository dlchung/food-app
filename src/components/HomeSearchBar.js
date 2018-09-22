import React, { Component } from 'react'

import { connect } from 'react-redux'
import { setLocation } from '../actions'

import { Redirect } from 'react-router-dom'

import { Input, Icon, Search } from 'semantic-ui-react'
import PlacesAutocomplete, { geocodeByPlaceId, geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class HomeSearchBar extends Component {
  state = {
    address: "",
    redirect: false
  }

  componentDidMount() {
  }

  componentDidUpdate() {
    // console.log("PROPS", this.props)
  }

  setRedirect = () => {
    this.setState({ redirect: true })
  }

  renderRedirect = () => {
    if(this.state.redirect) {
      return <Redirect to='/search' />
    }
  }

  handleChange = address => {
    // console.log("handleChange")
    this.setState({ address })
  }

  handleSelect = address => {
    // console.log("handleSelect")
    this.setState({ address })
    geocodeByAddress(address)
      .then(results => {
        // console.log("DATA", results[0])
        this.props.setLocation(results[0], getLatLng(results[0]))

      })

    this.setRedirect()
      // .then(results => getLatLng(results[0]))
      // .then(latLng => console.log('Success', latLng))
      // .catch(error => console.error('Error', error))
  }

  render() {
    return (
      <React.Fragment>
        {this.renderRedirect()}
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
          debounce={500}
          highlightFirstSuggestion={true}
        >

          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <Input icon={<Icon name="search" circular />} iconPosition="right" size="massive" fluid
                {...getInputProps({
                  placeholder: 'Your Address ...',
                  className: 'location-search-input',
                })}
              />

              {loading && <div>Loading...</div>}

              {suggestions.map(suggestion => {
                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item'

                // inline style for demonstration purpose
                const style = suggestion.active ? { backgroundColor: '#ccc', cursor: 'pointer' } : { backgroundColor: '#ddd', cursor: 'pointer' }

                // this.setState({results: suggestion.description})

                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          )}


        </PlacesAutocomplete>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log("STATE", state)
  return {
    selectedLocation: state.selectedLocation
  }
}

export default connect(mapStateToProps, {setLocation})(HomeSearchBar)
