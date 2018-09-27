import React, { Component } from 'react'

import { geolocated } from 'react-geolocated'

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
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ?
          null
          : <div>Getting the location data&hellip; </div>;
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(GeoLocate);
