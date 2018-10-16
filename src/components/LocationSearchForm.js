import React, { Component } from 'react'

import { connect } from 'react-redux'
import { setLocation, getLocations } from '../actions'
import { fetchAddLocation } from '../adapters/locationsAdapter'

import { Form, List } from 'semantic-ui-react'
import PlacesAutocomplete, {  geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class LocationSearchForm extends Component {
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

  handleButtonClick = (e) => { // handle submit button
    geocodeByAddress(this.state.address) // geocode using the address
      .then(results => {
        getLatLng(results[0]).then(latLng => { // use first result to get latitude and longitude
          this.props.setLocation(latLng) // set the location
        })
      })

    fetchAddLocation(this.state.name, this.state.address)
      .then(resp => {
        this.props.getLocations()
        this.props.handleModalSubmit(resp.data.address)
      })
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

              <Form>
                <Form.Input fluid
                  label="Location Label"
                  size="big"
                  id="location-name"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                  placeholder="Home"
                />

                <Form.Input fluid
                  label="Address or Place"
                  size="big"
                  id="location-address"
                  {...getInputProps({
                    placeholder: 'e.g. 123 River Water Street',
                    className: 'location-search-input',
                  })}
                  icon={loading ? {name: "sync alternate", loading: true, color: "grey"} : null}
                />

                {/* {loading && <Message size="small">Loading...</Message>} */}

                <List size="large">
                  {suggestions.length > 0 ? <List.Header>Suggested locations:</List.Header> : null}
                  {suggestions.map(suggestion => {
                    const className = suggestion.active ? 'suggestion-item-active' : 'suggestion-item'

                    return (
                      <List.Item
                        {...getSuggestionItemProps(suggestion, {
                          className
                        })}
                      >
                        <List.Icon name="map pin" color="red" />
                        <List.Content><span className="suggestion-text">{suggestion.description}</span></List.Content>
                      </List.Item>
                    );

                  })}

                </List>
                <Form.Button onClick={this.handleButtonClick}>Save</Form.Button>
              </Form>

          )}

        </PlacesAutocomplete>
      </React.Fragment>
    )
  }
}

export default connect(null, {setLocation, getLocations})(LocationSearchForm)
