import React, { Component } from 'react'

import { connect } from 'react-redux'
import { setKeywords } from '../actions'

import { Input, Form } from 'semantic-ui-react'

class HomeSearchBar extends Component {
  state = {
    searchText: ""
  }

  handleChange = (e) => {
    this.setState({ searchText: e.target.value })
  }

  handleSubmit = () => {
    console.log("submitted")
  }

  render() {
    return (
      <React.Fragment>
        <Form>
          <Input fluid
            label={{content: "Find", basic: true}}
            action={{content: "Search"}}
            size="huge"
            placeholder="chinese, ramen, bagels..."
            onChange={this.handleChange}
          />
        </Form>
      </React.Fragment>
    )
  }
}

export default connect(null, {setKeywords})(HomeSearchBar)
