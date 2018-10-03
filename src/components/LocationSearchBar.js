import React, { Component } from 'react'

import { connect } from 'react-redux'
import { setLocation } from '../actions'

import { Form, Input, Icon, Button} from 'semantic-ui-react'
import PlacesAutocomplete, {  geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class LocationSearchBar extends Component {
  state = {
    address: "",
  }

  handleChange = address => {
    this.setState({ address })
  }

  handleSelect = address => {
    this.setState({ address })
  }

  handleClick = (e) => {
    // const inputValue = document.querySelector("#location-address").value
    // console.log(this.state.address)

    // geocodeByAddress(address) // geocode using the address
    //   .then(results => {
    //     getLatLng(results[0]).then(latLng => { // use first result to get latitude and longitude
    //       this.props.setLocation(latLng) // set the location
    //     })
    //   })
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
              <Form>
                <Form.Input fluid
                  label="Location Label"
                  size="big"
                  id="location-label"
                />
                <Form.Input fluid
                  label="Address or Location"
                  size="big"
                  id="location-address"
                  {...getInputProps({
                    placeholder: 'e.g. 123 River Water Way',
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

                <Form.Button onClick={this.handleClick}>Save</Form.Button>
              </Form>

            </div>
          )}


        </PlacesAutocomplete>
      </React.Fragment>
    )
  }
}

export default connect(null, {setLocation})(LocationSearchBar)
