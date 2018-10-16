import React, { Component } from 'react'

import SearchResultsDetails from './SearchResultsDetails'

import { Card, Icon, Grid } from 'semantic-ui-react'

export default class SearchResultsItem extends Component {
  state = {
    showDetails: false
  }

  handleClick = () => {
    this.setState({ showDetails: !this.state.showDetails })
  }

  showDetails = () => {
    return <SearchResultsDetails restaurant={this.props.restaurant} handleClick={this.handleClick} />
  }

  render() {
    const address = this.props.restaurant.street
    const address2 = `${this.props.restaurant.city}, ${this.props.restaurant.state}, ${this.props.restaurant.zipcode}`

    return (
      <React.Fragment>
        <Card.Group>
          <Card fluid color={this.state.showDetails ? "red" : "grey"}>
            <Card.Content>
              <Card.Header onClick={this.handleClick} className="result-header">
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={15}>
                      <p>
                        {this.props.restaurant.name}
                      </p>
                      <p className="result-description">
                        {address}, {address2}
                      </p>
                    </Grid.Column>
                    <Grid.Column>
                      {this.state.showDetails ? <Icon name="chevron up" color="red" /> : <Icon name="chevron down" color="grey" />}
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card.Header>
            </Card.Content>
            { this.state.showDetails ? this.showDetails() : null }
          </Card>
        </Card.Group>
      </React.Fragment>
    )
  }
}
