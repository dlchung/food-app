import React, { Component } from 'react'

import { connect } from 'react-redux'
import { setKeywords } from '../actions'

import { Input, Form } from 'semantic-ui-react'

class HomeSearchBar extends Component {
  state = {
    keyword: ""
  }

  handleChange = (e) => {
    this.setState({ keyword: e.target.value })
  }

  handleSubmit = (e) => {
    console.log("submitted", this.state.keyword)
    this.props.setKeywords(this.state.keyword)
  }

  render() {
    return (
      <React.Fragment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input fluid
            label={{content: "Find", basic: "true"}}
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
