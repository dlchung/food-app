import React,  { Component } from 'react'

import { Input, Icon } from 'semantic-ui-react'

export default class HomeSearchBar extends Component {
  render() {
    return (
      <div>
        <Input fluid placeholder="Search..." icon={<Icon name="search" circular link />} iconPosition="right" size="massive" />
      </div>
    )
  }
}


// array = [2, 4, 6, 10]
//
// target = 8
//
// filter integers higher than target
// sort from lowest to highest
// subtract highest number from target
// subtract lowest number from result
// if the result is greater than 0, then use the next lowest number
// else if the result is less than 0, then use the next highest number
