import React, { Component } from 'react'

import LocationDropdown from './LocationDropdown'

import { Grid, Header, Icon } from 'semantic-ui-react'

export default class NavBar extends Component {

  render() {
    return (
      <React.Fragment>
        <Grid centered>
          <Grid.Row>
            <Grid.Column width={12}><Header as="h1" color="red"><a href="/" id="logo"><Icon name="coffee" />Yums</a></Header></Grid.Column>
            <Grid.Column width={4}>
              <LocationDropdown />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Header size="large" color="grey">Compare restaurant ratings side-by-side.</Header>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    )
  }
}
