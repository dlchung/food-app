import React, { Component } from 'react'

import { Card } from 'semantic-ui-react'

export default class SearchResultsItem extends Component {
  state = {
    showDetails: false
  }

  handleClick = () => {
    // console.log("handleClick", e.currentTarget.querySelector(".restaurant-details"))
    // const container = e.currentTarget.querySelector(".restaurant-details")
    this.setState({showDetails: !this.state.showDetails})
  }

  render() {
    const content = (
      <Card.Content>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet euismod purus, at posuere eros venenatis et. Nunc sit amet dictum urna, fringilla vestibulum ex. Etiam mollis odio a ullamcorper viverra. Aliquam ultricies arcu in tortor mollis, sit amet facilisis risus tempor. Donec volutpat gravida odio ut pharetra. Ut rutrum, justo sed interdum mattis, tortor erat aliquam tortor, nec venenatis dui augue vitae ligula.</p>
      </Card.Content>
    )

    return (
      <React.Fragment>
        <Card.Group onClick={this.handleClick}>
          <Card fluid link>
            <Card.Content>
              <Card.Header>{this.props.restaurant.name}</Card.Header>
              <Card.Description><p>{this.props.restaurant.street}<br />{this.props.restaurant.city}, {this.props.restaurant.state}, {this.props.restaurant.zipcode}</p></Card.Description>
            </Card.Content>
            { this.state.showDetails ? content : null }
          </Card>
        </Card.Group>
      </React.Fragment>
    )
  }
}
