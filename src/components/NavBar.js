import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setLocation } from '../actions'

import NavAvatar from './NavAvatar'
import NewLocation from './NewLocation'

import { Grid, Header, Image, Dropdown, Modal, Icon } from 'semantic-ui-react'

const locations = [
  { text: "Current Location", value: "current_location" },
  { text: "Dumbo, Brooklyn, NY", value: "40.6826512,-73.9752773" },
  { text: "Manhattan, NY", value: "40.70989179999999,-74.0063296" },
  { text: "Queens, NY", value: "40.71643199999999,-73.997839" },
  { text: "+ Add New Location", value: "add_new_location" }
]

class NavBar extends Component {
  state = {
    openModal: false
  }

  handleChange = (event, data) => {
    if(data.value === "add_new_location") {
      this.newLocation()
    } else {
      const coords = data.value.split(",")
      const latlng = { lat: parseFloat(coords[0]), lng: parseFloat(coords[1]) }
      this.props.setLocation(latlng)
    }
  }

  handleClose = () => {
    this.setState({ openModal: false })
  }

  newLocation = () => {
    this.setState({ openModal: !this.state.openModal }, () => { console.log(this.state) })
  }

  renderOptions = (options) => {
    return options.map(option => {
      return (
        <Dropdown.Item />
      )
    })
  }

  render() {
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
                options={locations}
                key={locations.value}
              >

              </Dropdown>
            </Grid.Column>
            <Grid.Column width={4}><NavAvatar /></Grid.Column>
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
            <NewLocation />
          </Modal.Content>
        </Modal>
      </React.Fragment>
    )
  }
}

export default connect(null, {setLocation})(NavBar)
