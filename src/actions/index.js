import { fetchAllRestaurants, fetchNearbyRestaurants } from '../adapters/restaurantsAdapter'
import { fetchLocations } from '../adapters/locationsAdapter'

export const getAllRestaurants = () => {
  return (dispatch) => {
    fetchAllRestaurants()
      .then(resp => {
        // console.log("HELLO", resp)
        dispatch(setRestaurants(resp))
      })
  }
}

export const getNearbyRestaurants = (latLng, keyword) => {
  return (dispatch) => {
    fetchNearbyRestaurants(latLng, keyword)
      .then(resp => {
        dispatch(setNearbyRestaurants(resp.data))
      })
  }
}

export const setLocation = (latLng) => {
  // console.log("hit action", latLng)
  let coordinates = {}
  coordinates = Object.assign({}, latLng)
  return {
    type: "SET_LOCATION",
    payload: {
      latLng: coordinates // {lat: x, lng: y}
    }
  }
}

export const getLocations = () => {
  console.log("getting locations")
  return (dispatch) => {
    fetchLocations()
      .then(resp => {
        dispatch(setLocations(resp.data))
      })
  }
}

export const setKeywords = (keyword) => {
  return {
    type: "SET_KEYWORDS",
    payload: {
      keyword
    }
  }
}

export const allowGetResults = (getResults) => {
  return {
    type: "ALLOW_GET_RESULTS",
    payload: {
      getResults
    }
  }
}

const setNearbyRestaurants = (restaurants) => {
  return {
    type: "GET_NEARBY_RESTAURANTS",
    payload: {
      restaurants
    }
  }
}

const setRestaurants = (restaurants) => {
  return {
    type: "GET_ALL_RESTAURANTS",
    payload: {
      restaurants
    }
  }
}

const setLocations = (locations) => {
  return {
    type: "GET_LOCATIONS",
    payload: {
      locations
    }
  }
}
