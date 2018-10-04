import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setLocation, getLocations } from '../actions'

import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import NavAvatar from './NavAvatar'
import NewLocation from './NewLocation'

import { Grid, Header, Dropdown, Modal, Icon } from 'semantic-ui-react'

class NavBar extends Component {
  state = {
    openModal: false,
    lastSelected: "current_location",
    currentLocation: "",
  }

  componentDidMount() {
    this.props.getLocations()
    // console.log("componentDidMount", this.props)
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("UPDATE", this.props.locations)
  }

  handleChange = (event, data) => {
    if(data.value === "add_location") {
      // console.log("add_location", data)
      this.newLocation()
    } else if(data.value === "current_location") {
      // console.log("current_location", data)
      // const coords = data.value.split(",")
      // const latlng = { lat: parseFloat(coords[0]), lng: parseFloat(coords[1]) }
      this.props.setLocation(this.props.currentLocation)
    } else {
      // console.log(event, data)
      geocodeByAddress(data.value)
        .then(resp => {
          getLatLng(resp[0]).then(latLng => {
            console.log("else", latLng)
            this.props.setLocation(latLng)
          })
        })
    }

    this.setState({ lastSelected: data.value })
  }

  handleClose = () => {
    this.setState({ openModal: false })
  }

  newLocation = () => {
    this.setState({ openModal: !this.state.openModal }, () => { console.log(this.state) })
  }

  renderOptions = () => {
    let locations = []
    if(this.props.locations) {
      locations = this.props.locations.map(location => {
        let selected = false
        if(location.address === this.state.lastSelected) {
          selected = true
        }
        return { text: location.name, value: location.address, active: selected}
      })
    }

    locations.unshift({ text: "Current Location", value: "current_location" })
    locations.push({ text: "+ Add Location", value: "add_location" })


    console.log("renderOptions", locations)
    return locations
  }

  handleModalSubmit = (address) => {
    this.setState({ openModal: false, lastSelected: address })
    console.log("handle submit")
  }

  render() {
    // console.log("rendering", this.props.locations)
    return (
      <React.Fragment>
        <Grid centered>
          <Grid.Row>
            <Grid.Column width={8}><Header as="h1">App Logo</Header></Grid.Column>
            <Grid.Column width={4}>
              <Dropdown fluid selection
                placeholder="Select a location"
                onChange={this.handleChange}
                selectOnBlur={false}
                options={this.renderOptions()}
                value={this.state.lastSelected}
              />
            </Grid.Column>
            <Grid.Column width={4}>
              <NavAvatar />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Modal open={this.state.openModal}>
          <Modal.Header>
            <Grid>
              <Grid.Row>
                <Grid.Column width={15}>Add New Location</Grid.Column>
                <Grid.Column width={1}><Icon link name="close" onClick={this.handleClose} /></Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Header>
          <Modal.Content>
            <NewLocation handleModalSubmit={this.handleModalSubmit} />
          </Modal.Content>
        </Modal>
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

export default connect(mapStateToProps, {setLocation, getLocations})(NavBar)
