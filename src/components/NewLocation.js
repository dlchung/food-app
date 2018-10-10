import React, { Component } from 'react'

import LocationSearchForm from './LocationSearchForm'

import { Grid, Modal, Icon } from 'semantic-ui-react'

export default class NewLocation extends Component {
  handleClose = () => {
    this.props.newLocation()
  }

  render() {
    // console.log("NewLocation", this.props.openModal)
    return (
      <React.Fragment>
        <Modal open={this.props.openModal}>
          <Modal.Header>
            <Grid>
              <Grid.Row>
                <Grid.Column width={15}>Add New Location</Grid.Column>
                <Grid.Column width={1}><Icon link name="close" onClick={this.handleClose} /></Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Header>
          <Modal.Content>
            <LocationSearchForm handleModalSubmit={this.props.handleModalSubmit} />
          </Modal.Content>
        </Modal>
      </React.Fragment>
    )
  }
}
