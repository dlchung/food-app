import React, { Component } from 'react'

import { connect } from 'react-redux'
import { setKeywords } from '../actions'

import { withRouter } from 'react-router'

import { Form, Icon } from 'semantic-ui-react'

class HomeSearchBar extends Component {
  state = {
    keyword: ""
  }

  handleChange = (e) => {
    this.setState({ keyword: e.target.value })
  }

  handleSubmit = (e) => {
    // console.log("submitted", this.state.keyword)
    this.props.setKeywords(this.state.keyword)
    // console.log(this.props.history)
    if(this.props.history.location.pathname !== "/search") {
      this.props.history.push('/search')
    }
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
            iconPosition="left"
            icon={<Icon name="food" circular={true}></Icon>}
          />
        </Form>
      </React.Fragment>
    )
  }
}

export default withRouter(connect(null, {setKeywords})(HomeSearchBar))
