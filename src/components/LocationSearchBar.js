import React, { Component } from 'react'

import { connect } from 'react-redux'
import { setLocation } from '../actions'

import { Input, Icon } from 'semantic-ui-react'
import PlacesAutocomplete, {  geocodeByAddress, getLatLng } from 'react-places-autocomplete';

export default class LocationSearchBar extends Component {
  state = {
    address: "",
  }

  handleChange = address => {
    this.setState({ address })
  }

  handleSelect = address => {
    this.setState({ address })
    geocodeByAddress(address)
      .then(results => {
        // console.log("DATA", results[0])
        this.props.setLocation(results[0], getLatLng(results[0]))
      })
  }

  render() {
    return (
      <React.Fragment>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
          debounce={500}
          highlightFirstSuggestion={true}
        >

          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <Input fluid label={{content: "Find", basic: "true"}} action={{content: "Search", color: "yellow"}} size="huge"
                {...getInputProps({
                  placeholder: 'chinese, ramen, bagels...',
                  className: 'location-search-input',
                })}
              />

              {loading && <div>Loading...</div>}

              {suggestions.map(suggestion => {
                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item'

                // inline style for demonstration purpose
                const style = suggestion.active ? { backgroundColor: '#ccc', cursor: 'pointer' } : { backgroundColor: '#ddd', cursor: 'pointer' }

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

export default connect(null, {setLocation})(LocationSearchBar)
