import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card, Segment, Statistic } from 'semantic-ui-react'

class SearchResultsItemRatings extends Component {

  // coloring system for 5 point scale
  fivePointColor = (num) => {
    if(num !== "n/a") {
      const score = parseInt(num, 10)
      if(score > 3.4) {
        return "green"
      } else if(score > 1.9) {
        return "yellow"
      } else {
        return "red"
      }
    }
    else {
      return "grey"
    }
  }

  // coloring system for 10 point scale
  tenPointColor = (num) => {
    if(num !== "n/a") {
      const score = parseInt(num, 10)
      if(score > 6.5) {
        return "green"
      } else if(score > 3.2) {
        return "yellow"
      } else {
        return "red"
      }
    }
    else {
      return "grey"
    }
  }

  // adjust size for text vs number
  ratingSize = (score) => {
    if(score === "n/a") {
      return "tiny"
    }
    else {
      return "small"
    }
  }

  // create link for url if it exists
  platformUrl = (platform, text) => {
    if(this.props[`${platform}`].url) {
      return (<a href={this.props[`${platform}`].url} target="_blank">{text}</a>)
    }
    else {
      return text
    }
  }

  // render ratings based on existing platforms in redux store
  renderRatings = () => {
    // props.platforms has is nested object
    const platforms = Object.keys(this.props.platforms)

    return platforms.map(platform => { // iterate through array of keys from props object
      const p = this.props.platforms[platform]
      return (
          <Statistic color={this.fivePointColor(this.props[platform].rating)} size={this.ratingSize(this.props[platform].rating)} key={p.slug}>
            <Statistic.Label>{this.platformUrl(p.slug, p.label)}</Statistic.Label>
            <Statistic.Value>{this.props[platform].rating}</Statistic.Value>
            <Statistic.Value text>{this.props[platform].rating > 0 ? `/ ${p.maxScore}` : null}</Statistic.Value>
          </Statistic>
        )
    })
  }

  render() {
    return (
      <React.Fragment>
        <Card.Description>
          <Segment basic textAlign="left">
            {this.renderRatings()}
          </Segment>
        </Card.Description>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    platforms: state.platforms
  }
}

export default connect(mapStateToProps)(SearchResultsItemRatings)
