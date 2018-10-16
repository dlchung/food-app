import React, { Component } from 'react'
import { geolocated } from 'react-geolocated'

import { Message, Icon } from 'semantic-ui-react'

class GeoLocate extends Component {
  componentDidUpdate() {
    if(this.props.coords) {
      const latLng = {
        lat: this.props.coords.latitude,
        lng: this.props.coords.longitude
      }

      // console.log("hit geolocate", latLng)
      this.props.getLatLng(latLng)
    }
  }

  render() {
    return !this.props.isGeolocationAvailable
      ? <Message floating compact info size="small">
          <Message.Content>Your browser does not support Geolocation</Message.Content>
        </Message>
      : !this.props.isGeolocationEnabled
        ? <Message floating compact info size="small">
            <Message.Content>
              Geolocation is not enabled
            </Message.Content>
          </Message>
        : this.props.coords
          ?
          null
          : <Message floating compact info size="small">
              <Message.Content>
                <Icon name="sync alternate" loading />Getting your location data&hellip;
              </Message.Content>
            </Message>
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 10000,
})(GeoLocate);
