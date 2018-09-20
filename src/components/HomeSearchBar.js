import React, { Component } from 'react'

import { Form, Icon } from 'semantic-ui-react'
import PlacesAutocomplete, { geocodeByPlaceId, geocodeByAddress, getLatLng } from 'react-places-autocomplete';

export default class HomeSearchBar extends Component {
  state = {
    search_text: "",
    google_place_id: "",
    address: ""
  }

  componentDidMount() {
  }

  // handleChange = (e) => {
    // const search_text = e.target.value
    // this.setState({search_text})
  // }

  // handleSubmit = () => {
    // if(this.state.search_text) {
    //   console.log(this.state.search_text)
    // }
  // }

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
        {/* <Form action="/search" onSubmit={this.handleSubmit}>
          <Form.Input placeholder="Search..." icon={<Icon name="search" circular link />} iconPosition="right" size="massive" value={this.state.search_text} onChange={this.handleChange} fluid />
        </Form> */}
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input',
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
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
            </div>
          )}
        </PlacesAutocomplete>
      </React.Fragment>
    )
  }
}
