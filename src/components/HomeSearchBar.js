import React, { Component } from 'react'

import { Input, Icon } from 'semantic-ui-react'

export default class HomeSearchBar extends Component {
  render() {
    return (
      <React.Fragment>
        <Input fluid placeholder="Search..." icon={<Icon name="search" circular link />} iconPosition="right" size="massive" />
      </React.Fragment>
    )
  }
}
