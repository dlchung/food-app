import React, { Component } from 'react'
import { connect } from 'react-redux'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { setLocation, getLocations } from '../actions'

import NewLocation from './NewLocation'

import { Dropdown } from 'semantic-ui-react'

class LocationDropdown extends Component {
  state = {
    openModal: false,
    lastSelected: "current_location",
    currentLocation: "",
  }

  componentDidMount() {
    this.props.getLocations()
  }

  handleChange = (event, data) => {
    if(data.value === "add_location") { // open new location modal if add location is selected
      this.newLocation()
    } else if(data.value === "current_location") { // reset to current location
      this.props.setLocation(this.props.currentLocation)
    } else { // set location to selected value
      geocodeByAddress(data.value)
        .then(resp => {
          getLatLng(resp[0]).then(latLng => {
            this.props.setLocation(latLng)
          })
        })
    }

    this.setState({ lastSelected: data.value })
  }

  newLocation = () => {
    this.setState({ openModal: !this.state.openModal }, () => { 
      // console.log(this.state) 
    })
  }

  // render options for locations dropdown
  renderOptions = () => {
    let locations = []
    if(this.props.locations) {
      locations = this.props.locations.map(location => {
        let selected = false
        if(location.address === this.state.lastSelected) {
          selected = true
        }
        return { text: location.name, value: location.address, icon: "building outline", active: selected}
        // return <Dropdown.Item text={location.name} value={location.address} icon="building outline" active={selected} key={location.id} />
      })
    }

    locations.unshift({ text: "Current Location", value: "current_location", icon: "location arrow" })
    locations.push({ text: "Add Location", value: "add_location", icon: "plus" })

    return locations
  }

  handleModalSubmit = (address) => {
    this.setState({ openModal: false, lastSelected: address })
    // console.log("handle submit")
  }

  render() {
    return (
      <React.Fragment>
        <Dropdown button fluid labeled
          placeholder="Select a location"
          className="icon"
          onChange={this.handleChange}
          selectOnBlur={false}
          options={this.renderOptions()}
          value={this.state.lastSelected}
          icon="angle down"
        />
        <NewLocation handleModalSubmit={this.handleModalSubmit} newLocation={this.newLocation} openModal={this.state.openModal} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations,
    currentLocation: state.currentLocation
  }
}

export default connect(mapStateToProps, {setLocation, getLocations})(LocationDropdown)
