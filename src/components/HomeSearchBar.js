import React, { Component } from 'react'

import { Form, Icon } from 'semantic-ui-react'
import PlacesAutocomplete, { geocodeByPlaceId, geocodeByAddress, getLatLng } from 'react-places-autocomplete';

export default class HomeSearchBar extends Component {
  state = {
    address: ""
  }

  componentDidMount() {
  }

  handleChange = address => {
    this.setState({ address });
  }

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

  render() {
    return (
      <React.Fragment>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
          debounce={400}
          highlightFirstSuggestion={true}
        >

          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <Form action="/search" onSubmit={this.handleSubmit}>
                <Form.Input icon={<Icon name="search" circular link />} iconPosition="right" size="massive" fluid
                  {...getInputProps({
                    placeholder: 'Search Places ...',
                    className: 'location-search-input',
                  })}
                />
              </Form>

              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#aaa', cursor: 'pointer' }
                  : { backgroundColor: '#ccc', cursor: 'pointer' };
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
