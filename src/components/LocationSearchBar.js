import React, { Component } from 'react'

import { connect } from 'react-redux'
import { setLocation, getLocations } from '../actions'
import { fetchAddLocation } from '../adapters/locationsAdapter'

import { Form, Input, Icon, Button} from 'semantic-ui-react'
import PlacesAutocomplete, {  geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class LocationSearchBar extends Component {
  state = {
    name: "",
    address: "",
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleAddressChange = (address) => {
    this.setState({ address })
  }

  handleAddressSelect = (address) => {
    this.setState({ address })
  }

  handleButtonClick = (e) => {
    // console.log(this.state.address)
    geocodeByAddress(this.state.address) // geocode using the address
      .then(results => {
        getLatLng(results[0]).then(latLng => { // use first result to get latitude and longitude
          this.props.setLocation(latLng) // set the location
        })
      })

    // console.log(this.state.name, this.state.address)
    fetchAddLocation(this.state.name, this.state.address)
    this.props.getLocations()
    this.props.handleModalSubmit()
  }

  render() {
    return (
      <React.Fragment>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleAddressChange}
          onSelect={this.handleAddressSelect}
          debounce={500}
          highlightFirstSuggestion={true}
        >

          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <Form>
                <Form.Input fluid
                  label="Location Name"
                  size="big"
                  id="location-name"
                  value={this.state.name}
                  onChange={this.handleNameChange}
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

                <Form.Button onClick={this.handleButtonClick}>Save</Form.Button>
              </Form>

            </div>
          )}


        </PlacesAutocomplete>
      </React.Fragment>
    )
  }
}

export default connect(null, {setLocation, getLocations})(LocationSearchBar)
