import React, { Component } from 'react'

import { Form, Icon } from 'semantic-ui-react'

export default class HomeSearchBar extends Component {
  state = {
    search_text: ""
  }

  handleChange = (e) => {
    const search_text = e.target.value
    this.setState({search_text})
  }

  handleSubmit = () => {
    if(this.state.search_text) {
      console.log(this.state.search_text)
    }
  }

  render() {
    return (
      <React.Fragment>
        <Form action="/search" onSubmit={this.handleSubmit}>
          <Form.Input placeholder="Search..." icon={<Icon name="search" circular link />} iconPosition="right" size="massive" value={this.state.search_text} onChange={this.handleChange} fluid />
        </Form>
      </React.Fragment>
    )
  }
}
